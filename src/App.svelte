<script lang="ts">
    import QRCode from 'qrcode'
    import debounce from 'lodash/debounce'

    const numbers = '0123456789'
    const special = `!#$%&()*+,-./:;<=>?@[\\]^_{|}~ `

    const isNumber = (character: string) => numbers.includes(character)
    const isSpecial = (character: string) => special.includes(character)

    let canvas: HTMLCanvasElement
    let format: HTMLButtonElement

    let text = $state('')
    let loaded = $state(false)

    const updateQR = debounce(() => {
        if (!text) return
        QRCode.toCanvas(canvas, text, () => {
            loaded = true
        })
    }, 50) as any

    $effect(() => {
        updateQR()
    })
</script>

<main>
    <p>Text to format:</p>
    <textarea
        bind:value={text}
        autocomplete="off"
        spellcheck="false"
        onkeydown={updateQR}
        onpaste={updateQR}
    ></textarea>

    <button
        bind:this={format}
        onclick={() => {
            window.getSelection()?.selectAllChildren(format)
        }}
    >
        {#each text as character, index (`${character}:${index}`)}
            <span class:n={isNumber(character)} class:s={isSpecial(character)}
                >{character}</span
            >
        {/each}
    </button>

    <canvas bind:this={canvas} class:h={!loaded || !text}></canvas>

    <a href="https://github.com/Greenheart/dup" target="_blank" rel="noopener">
        Code on GitHub
    </a>
</main>

<style>
    :global(html, body) {
        background: #191919;
        margin: 0;
    }

    * {
        box-sizing: border-box;
        padding: 0;
    }

    main {
        padding: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    textarea {
        padding: 1rem 2rem;
        text-align: center;
        font-size: 20px;
        width: 100%;
        max-width: 650px;
    }

    canvas {
        background: white;
        margin: 16px 0;
    }

    a {
        color: #52bdfb !important;
    }

    .h {
        display: none;
    }

    button {
        background: transparent;
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
        width: 100%;
        border: 0;
        outline: 0;
        font-size: 22px;
        margin: 0;
        padding: 4rem 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 650px;
        white-space: pre;
    }

    .n {
        color: #52bdfb;
    }

    .s {
        color: #f25f5c;
    }
</style>

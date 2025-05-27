<script lang="ts">
    import QRCode from 'qrcode'
    import { debounce } from 'es-toolkit'

    const numbers = '0123456789'
    const special = `!#$%&()*+,-./:;<=>?@[\\]^_{|}~ `

    const isNumber = (character: string) => numbers.includes(character)
    const isSpecial = (character: string) => special.includes(character)

    let canvas: HTMLCanvasElement
    let format: HTMLButtonElement

    let text = $state('')
    let loaded = $state(false)

    const updateQR = debounce((text: string) => {
        if (!text) return
        QRCode.toCanvas(canvas, text, () => {
            loaded = true
        })
    }, 50) as any

    $effect(() => {
        updateQR(text)
    })
</script>

<main>
    <header>
        <button
            onclick={async () => {
                if (navigator.clipboard) {
                    text = await navigator.clipboard?.readText()
                }
            }}
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                ><path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0q.083.292.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0q.002-.32.084-.612m7.332 0q.969.073 1.927.184c1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48 48 0 0 1 1.927-.184"
                /></svg
            > Paste</button
        > <span>or type text to format:</span>
    </header>
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
            if (text.length) {
                window.getSelection()?.selectAllChildren(format)
            }
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
        padding: 2rem 1rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: start;
        padding-bottom: 1rem;
        text-align: start;
        font-size: 0.875rem;

        button {
            padding: 0.5rem;
            max-width: auto;
            width: auto;
            background: white;
            color: black;
            font-size: 0.875rem;

            &:hover {
                background: #ccc;
            }
        }
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

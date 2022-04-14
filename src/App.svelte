<script lang="ts">
    const numbers = '0123456789'
    const special = `!#$%&()*+,-./:;<=>?@[\\]^_{|}~ `

    const isNumber = (character: string) => numbers.includes(character)
    const isSpecial = (character: string) => special.includes(character)

    let text = ''
</script>

<main>
    <p>Text to format:</p>
    <textarea bind:value={text} autocomplete="off" spellcheck="false" />

    <p
        class="f"
        on:click={() => {
            window
                .getSelection()
                .selectAllChildren(document.querySelector('.f'))
        }}
    >
        {#each text as character, index (`${character}:${index}`)}
            <span class:n={isNumber(character)} class:s={isSpecial(character)}>
                {character}
            </span>
        {/each}
    </p>
    <a href="https://github.com/Greenheart/dup" target="_blank" rel="noopener">Code on GitHub</a>
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

    a {
        color: #52bdfb !important;
    }

    .f {
        border: 0;
        outline: 0;
        font-size: 22px;
        margin: 0;
        padding: 4rem 0;
        display: flex;
        flex-wrap: wrap;
        max-width: 650px;
    }

    .n {
        color: #52bdfb;
    }

    .s {
        color: #f25f5c;
    }
</style>

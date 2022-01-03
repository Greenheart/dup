<script lang="ts">
    const numbers = '0123456789'
    const special = `!#$%&()*+,-./:;<=>?@[\\]^_{|}~ `

    const isNumber = (character: string) => numbers.includes(character)
    const isSpecial = (character: string) => special.includes(character)

    let text = ''
</script>

<main>
    <p>Text to format:</p>
    <textarea type="text" bind:value={text} />

    <p class="format">
        {#each text as character, index (`${character}:${index}`)}
            <span class:n={isNumber(character)} class:s={isSpecial(character)}>{character}</span>
        {/each}
    </p>
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    * {
        box-sizing: border-box;
        /* margin: 0; */
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

    .format {
        border: 0;
        outline: 0;
        font-size: 22px;
        margin: 0;
        padding: 10vh;
    }

    :global(html, body) {
        background: #191919;
        margin: 0;
    }

    .n {
        color: #52bdfb;
    }

    .s {
        color: #f25f5c;
    }
</style>

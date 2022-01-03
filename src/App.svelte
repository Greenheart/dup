<script lang="ts">
    const numbers = '0123456789'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = lower.toUpperCase()
    const special = `!#$%&()*+,-./:;<=>?@[\\]^_{|}~ `

    let password = generatePassword(32)

    const isNumber = (character: string) => numbers.includes(character)
    const isSpecial = (character: string) => special.includes(character)

    /**
     * Generate a random password of a given length.
     *
     * @param length The password length.
     * @param characters The set of characters to pick from.
     * @returns A random password.
     */
    export function generatePassword(
        length = 80,
        characters = numbers + upper + lower + special,
    ) {
        return Array.from({ length }, (_) =>
            getRandomCharacter(characters),
        ).join('')
    }

    /**
     * Get a random character from a given set of characters.
     *
     * @param characters The set of characters to pick from.
     * @returns A random character.
     */
    function getRandomCharacter(characters: string) {
        let randomNumber: number
        // Due to the repeating nature of results from the remainder
        // operator, we potentially need to regenerate the random number
        // several times. This is required to ensure all characters have
        // the same probability to get picked. Otherwise, the first
        // characters would appear more often, resulting in a weaker
        // password security.
        // Learn more: https://samuelplumppu.se/blog/generate-password-in-browser-web-crypto-api
        do {
            randomNumber = crypto.getRandomValues(new Uint8Array(1))[0]
        } while (randomNumber >= 256 - (256 % characters.length))

        return characters[randomNumber % characters.length]
    }
</script>

<main>
    <p>Text to format:</p>
    <textarea type="text" bind:value={password} />

    <p class="format">
        {#each password as character, index (`${character}:${index}`)}
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
        /* color: white; */
        padding: 1rem 2rem;
        /* outline: 0;
    border: 0; */
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

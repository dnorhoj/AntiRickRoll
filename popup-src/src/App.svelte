<script>
    let counter = null;

    chrome.storage.local
        .get("counter")
        .then((data) => (counter = data.counter ?? 0));
    
    const increment = () => {
        counter++;
        chrome.storage.local.set({ counter });
    }
</script>

<div class="p-5">
    <h1>Svelte test</h1>

    {#if counter === null}
        <h1>Loading...</h1>
    {:else}
        <button
            class="p-2 bg-blue-500 text-white rounded-md"
            on:click={increment}
        >
            Increment
        </button>

        <p class="mt-2">Counter: {counter}</p>
    {/if}
</div>

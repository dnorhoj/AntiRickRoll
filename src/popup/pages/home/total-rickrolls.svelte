<script>
    import { onMount } from "svelte";
    import { Card } from "flowbite-svelte";
    /** @type {import('chrome')} */

    let totalRickRolls = null;

    const getTotalRickRolls = () => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get("totalRickRolls", (result) => {
                resolve(result.totalRickRolls ?? 0);
            });
        });
    }
</script>

<Card padding="none">
    <div class="flex items-center text-gray-700">
        <span class="p-4 flex-grow border-r">RickRolls blocked</span>
        <span class="p-4 font-bold text-lg">
            {#await getTotalRickRolls()}
                <span>...</span>
            {:then totalRickRolls}
                {totalRickRolls}
            {/await}
        </span>
    </div>
</Card>

<script>
    import { onMount } from "svelte";
    import { Card, Toggle } from "flowbite-svelte";
    /** @type {import('chrome')} */

    let enabled = true;

    const save = () => {
        console.log("saving", enabled);
        chrome.storage.local.set({ extDisabled: !enabled });
    };

    onMount(() => {
        chrome.storage.local.get("extDisabled", (result) => {
            enabled = !result.extDisabled;
            console.log("loaded", enabled);
        });
    });
</script>

<Card padding="none">
    <div class="flex py-4 pl-4">
        <span class="flex-grow text-gray-700">
            AntiRickRoll is {enabled ? "enabled" : "disabled"}
        </span>
        <div>
            <Toggle bind:checked={enabled} on:change={save} />
        </div>
    </div>
</Card>

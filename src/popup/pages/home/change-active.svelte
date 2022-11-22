<script>
    import { onMount } from "svelte";
    import { Toggle } from "flowbite-svelte";

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

<Toggle bind:checked={enabled} on:change={save}>
    AntiRickRoll is {enabled ? "Enabled" : "Disabled"}
</Toggle>

<!--
<div class="flex justify-between items-center mx-2">
    <label for="enabled">Enable AntiRickRoll</label>
    onMount(() => {

    <button
        class="p-2 m-0.5 rounded-xl"
        class:text-green-500={!disabled}
        class:text-red-500={disabled}
        on:click={toggle}
    >
        {#if disabled}
            <Fa icon={faToggleOff} scale={1.7} />
        {:else}
            <Fa icon={faToggleOn} scale={1.7} />
        {/if}
    </button>
</div>
-->

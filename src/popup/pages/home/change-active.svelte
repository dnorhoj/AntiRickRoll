<script>
    import { onMount } from "svelte";
    import Fa from "svelte-fa";
    import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

    let disabled;

    const toggle = () => {
        disabled = !disabled;
        chrome.storage.local.set({ extDisabled: disabled });
    };

    onMount(() => {
        chrome.storage.local.get("extDisabled", (result) => {
            disabled = result.extDisabled;
        });
    });
</script>

<div class="flex justify-between items-center mx-2">
    <label for="enabled">Enable AntiRickRoll</label>

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

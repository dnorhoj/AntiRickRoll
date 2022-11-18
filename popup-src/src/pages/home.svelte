<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let enabled,
        totalRickRolls,
        loading = true;

    const fetchData = async () => {
        chrome.storage.local.get(
            ["extDisabled", "totalRickRolls"],
            result => {
                console.log("Loaded extDisabled=", result.extDisabled);
                enabled = !result.extDisabled;
                totalRickRolls = result.totalRickRolls ?? 0;

                loading = false;
            }
        );
    };

    const save = () => {
        console.log("Saved extDisabled=", !enabled);
        chrome.storage.local.set({ extDisabled: !enabled });
    }

    onMount(fetchData);
</script>

{#if !loading}
    <div in:fade={{ duration: 50 }}>
        Total rick rolls: {totalRickRolls}

        <div>
            <label for="enabled">Enable AntiRickRoll</label>
            <input type="checkbox" bind:checked={enabled} on:change={save} />
        </div>
    </div>
{/if}

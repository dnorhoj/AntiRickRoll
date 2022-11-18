<script>
    import { onMount } from "svelte";
    import Fa from "svelte-fa";
    import { faTwitter } from "@fortawesome/free-brands-svg-icons";

    let totalRickRolls = null;

    const share = () => {
        if (totalRickRolls === null) return;

        const url = new URL("https://twitter.com/intent/tweet");
        url.searchParams.set(
            "text",
            `AntiRickRoll has saved me from ${totalRickRolls} rickrolls!`
        );
        url.searchParams.set("url", "https://antirickroll.com");
        url.searchParams.set("hashtags", "AntiRickRoll");

        window.open(url.toString(), "_blank");
    };

    onMount(() => {
        chrome.storage.local.get("totalRickRolls", (result) => {
            totalRickRolls = result.totalRickRolls ?? 0;
        });
    });
</script>

<div class="flex flex-col items-center">
    <button
        class="absolute top-0 right-0 p-2 m-1 hover:bg-neutral-400 transition-colors rounded-xl"
        on:click={share}
    >
        <Fa icon={faTwitter} />
    </button>
    <span class="text-2xl font-bold">{totalRickRolls ?? "..."}</span>
    <span>RickRolls blocked</span>
</div>

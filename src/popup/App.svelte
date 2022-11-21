<script>
    import { page } from "./lib/stores";

    import BottomNav from "./lib/layout/bottom-nav.svelte";
    import Header from "./lib/layout/header.svelte";
    import Home from "./pages/home.svelte";
    import Rickrolldb from "./pages/rickrolldb.svelte";
    import Settings from "./pages/settings.svelte";
    import Stats from "./pages/stats.svelte";
    import { fade } from "svelte/transition";

    const fadeOptions = {
        duration: 200,
    };
</script>

<Header />

<div class="h-96 overflow-x-scroll">
    {#if $page === 0}
        <div in:fade={fadeOptions}>
            <Home />
        </div>
    {:else if $page === 1}
        <div in:fade={fadeOptions}>
            <Stats />
        </div>
    {:else if $page === 2}
        <div in:fade={fadeOptions}>
            <Rickrolldb />
        </div>
    {:else if $page === 3}
        <div in:fade={fadeOptions}>
            <Settings />
        </div>
    {/if}
</div>

<BottomNav />

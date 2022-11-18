<script>
    import { page } from "./lib/stores";

    import BottomNav from "./lib/layout/bottom-nav.svelte";
    import Header from "./lib/layout/header.svelte";
    import Home from "./pages/home.svelte";
    import Rickrolldb from "./pages/rickrolldb.svelte";
    import Settings from "./pages/settings.svelte";
    import Stats from "./pages/stats.svelte";
</script>

<div class="h-96">
    <Header />

    <div>
        {#if $page === 0}
            <Home />
        {:else if $page === 1}
            <Stats />
        {:else if $page === 2}
            <Rickrolldb />
        {:else if $page === 3}
            <Settings />
        {/if}
    </div>
</div>

<BottomNav />

<script>
    import ChangeActive from "./home/change-active.svelte";
    import TotalRickrolls from "./home/total-rickrolls.svelte";
</script>

<div class="card">
    <ChangeActive />
</div>
<div class="card">
    <TotalRickrolls />
</div>

<style>
    .card {
        @apply mt-3 mx-2 p-1 bg-neutral-200 text-neutral-800 shadow-md rounded-lg select-none relative;
    }
</style>

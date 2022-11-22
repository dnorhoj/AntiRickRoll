<script>
    import ChangeActive from "./home/change-active.svelte";
    import TotalRickrolls from "./home/total-rickrolls.svelte";

    import { Card } from "flowbite-svelte";
</script>

<div class="p-3 space-y-3 select-none">
    <Card>
        <ChangeActive />
    </Card>
    <Card>
        <TotalRickrolls />
    </Card>
</div>

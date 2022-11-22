<script>
    import { Navbar, NavBrand, Badge } from "flowbite-svelte";
</script>

<Navbar navClass="px-2 py-2.5 border-b shadow select-none">
    <NavBrand href={null}>
        <img src="../icons/icon48.png" alt="Logo" draggable="false" class="mr-2 h-10" />
        <h1 class="font-semibold">AntiRickRoll</h1>
    </NavBrand>
    <Badge>Beta</Badge>
</Navbar>

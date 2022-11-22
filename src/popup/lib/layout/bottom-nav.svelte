<script>
    import {
        faHome,
        faChartBar,
        faServer,
        faCog,
    } from "@fortawesome/free-solid-svg-icons";

    import NavIcon from "./nav-icon.svelte";
</script>

<div class="flex border-t cursor-pointer">
    <NavIcon target={0} icon={faHome} title="Home" />
    <NavIcon target={1} icon={faChartBar} title="Stats" />
    <NavIcon target={2} icon={faServer} title="RickRolldb" />
    <NavIcon target={3} icon={faCog} title="Settings" />
</div>

<script>
    import Fa from "svelte-fa";
    import { page } from "../stores";

    export let target, icon, title;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="px-4 pt-4 pb-2 flex-1 flex flex-col gap-1.5 border-b-2 border-transparent text-gray-500 dark:text-gray-400 select-none w-20 text-center"
    class:hover:text-gray-600={$page !== target}
    class:hover:border-gray-400={$page !== target}
    class:dark:hover:text-gray-300={$page !== target}
    class:border-blue-500={$page === target}
    class:text-blue-500={$page === target}
    on:click={() => ($page = target)}
>
    <Fa {icon} />
    <span class="text-xs">{title}</span>
</div>

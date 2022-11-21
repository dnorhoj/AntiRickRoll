<script>
    import Fa from "svelte-fa";
    import { page } from "../stores";

    export let target, icon, title;
</script>

<div class="flex flex-col justify-center">
    <button
    class="flex justify-center items-center w-20 h-12 hover:bg-neutral-200 rounded-sm transition-colors"
    class:text-neutral-800={$page !== target} 
    class:text-red-500={$page === target}
        on:click={() => ($page = target)}
    >
        <div class="flex flex-col">
            <Fa {icon} scale={.7} class="text-2xl" />
            <span class="text-xs">{title}</span>
        </div>
    </button>
</div>
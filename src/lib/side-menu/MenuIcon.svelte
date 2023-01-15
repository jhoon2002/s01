<script>
export let name
export let isOver = false
</script>

<div
    class="{name} text-1.2rem duration-300"
    class:text-1.4rem={isOver}
/>

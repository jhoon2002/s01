<script>
    import Item from './Item.svelte'
    import List from './List.svelte'
    export let items
</script>

<ul class="pl-2">
    {#each items as item}
        {#if item.children?.length > 0}
            <List {item}>
                <svelte:self items={item.children} />
            </List>
        {:else}
            <Item {item} />
        {/if}
    {/each}
</ul>

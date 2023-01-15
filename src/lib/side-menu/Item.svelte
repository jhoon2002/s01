<script>
import MenuIcon from './MenuIcon.svelte'
export let item
let isOver = false
</script>

<li>
    <a
        href="#"
        class="flex items-center p-2 text-base font-normal h-45px
                text-gray-900 rounded-lg dark:text-white hover:bg-gray-100
                dark:hover:bg-gray-700 side-menu-link"
        on:mouseover={() => (isOver = true)}
        on:mouseleave={() => (isOver = false)}
    >
        <div class="w-25px flex justify-center">
            <MenuIcon
                name={item.icon}
                {isOver}
            />
        </div>
        <span class="ml-3 duration-500">
            {item.text}
        </span>
    </a>
</li>

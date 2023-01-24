<script>
import 'uno.css'
import '@unocss/reset/tailwind.css'
import '~routes/styles.css'
import SideMenu from '~lib/side-menu/SideMenu.svelte'

/** @type {import('./$types').LayoutData} */
export let data

let isOpen = true
let items = [
    {
        text: '시험 대상자',
        icon: 'fluent:accessibility-16-regular',
        children: [
            {
                text: '대상자 입력',
                icon: 'fluent:alert-16-regular',
                path: '/examinees/new',
            },
            {
                text: '2대상자 목록',
                icon: 'fluent:airplane-take-off-16-regular',
                path: '/sample/s1',
            },
            {
                text: '3대상자 입력',
                icon: 'fluent:align-bottom-16-regular',
                path: '/sample/s2',
            },
            {
                text: '4대상자 목록',
                icon: 'fluent:animal-cat-16-regular',
                children: [
                    { text: '서브메뉴1', icon: 'fluent:attach-16-filled', path: '/sample/s3' },
                    {
                        text: '서브메뉴1',
                        icon: 'fluent:balloon-16-regular',
                        path: '/sample/s4',
                    },
                    { text: '서브메뉴2', icon: 'fluent:beaker-16-regular', path: '/sample/s5' },
                ],
            },
            {
                text: '5대상자 입력',
                icon: 'fluent:board-16-regular',
                path: '/sample/s6',
            },
            {
                text: '6대상자 목록',
                icon: 'fluent:book-open-16-regular',
                path: '/sample/s7',
            },
        ],
    },
    {
        text: '개발 정보',
        icon: 'fluent:bookmark-multiple-16-regular',
        children: [
            {
                text: '개발 환경',
                icon: 'fluent:bowl-chopsticks-16-regular',
                children: [
                    {
                        text: '서브메뉴1',
                        icon: 'fluent:building-factory-16-regular',
                        path: '/sample/s8',
                    },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:calendar-ltr-16-regular',
                        path: '/sample/s9',
                    },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:camera-16-regular',
                        path: '/sample/s10',
                    },
                ],
            },
            {
                text: '스타일 가이드',
                icon: 'carbon:asterisk',
                children: [
                    { text: '서브메뉴1', icon: 'fluent:chat-16-regular', path: '/sample/s11' },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:classification-16-regular',
                        path: '/sample/s12',
                    },
                    {
                        text: '서브메뉴2',
                        icon: 'fluent:code-text-16-regular',
                        path: '/sample/s13',
                    },
                    { text: '서브메뉴2', icon: 'fluent:color-16-regular', path: '/sample/s14' },
                ],
            },
        ],
    },
    {
        text: '개발 정보',
        icon: 'fluent:communication-16-regular',
        path: '/sample/s15',
    },
]
</script>

<div class="h-screen flex flex-col">
    <header
        class="flex-none h-60px flex gap-2 items-center
                border-b border-b-solid border-gray-200 px-5"
    >
        <div class="text-1.2rem">연극원 입시 관리 시스템</div>
        <button
            class="border-none p-1
                    rounded-md cursor-pointer
                    hover:bg-gray-200"
            on:click={() => (isOpen = !isOpen)}
        >
            <div class="fluent:navigation-16-regular text-1.2rem" />
        </button>
    </header>
    <div class="flex-auto flex overflow-y-hidden">
        <aside
            class="flex-none w-250px border-r border-r-solid
                    border-r-gray-200 duration-200 pt-2rem"
            class:w-250px={isOpen}
            class:translate-x--250px={!isOpen}
            class:w-0={!isOpen}
        >
            <div class="pr-2"><SideMenu {items} /></div>
        </aside>
        <content class="flex-auto flex flex-col overflow-y-auto">
            <article class="flex-auto">
                <div class="p-5">
                    <slot />
                </div>
            </article>
            <footer
                class="flex-none h-70px flex items-center p-2 border-t border-t-solid border-t-gray-200"
            >
                <div class="text-0.9rem">Korea National University of Arts</div>
            </footer>
        </content>
    </div>
</div>

/** @type {import('./$types').LayoutData} */
export function load(a) {
    console.log(a)
    return {
        sections: [
            { slug: 'profile', title: 'Profile' },
            { slug: 'notifications', title: 'Notifications' },
        ],
    }
}

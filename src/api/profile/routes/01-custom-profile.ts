export default {
    routes: [
        {
            method: 'GET',
            path: '/profiles/:slug',
            handler: 'profile.findOneBySlug'
        }
    ]
}
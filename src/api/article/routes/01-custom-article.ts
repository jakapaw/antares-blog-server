
export default {
    routes: [
        {
            method: 'GET',
            path: '/articles/:slug',
            handler: 'article.findOneBySlug'
        },
        {
            method: 'GET',
            path: '/search',
            handler: 'article.search'
        }
    ]
}
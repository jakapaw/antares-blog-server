export default {
    async searchTitle(key: string) {
        return await strapi.documents('api::article.article').findMany({
            filters: {
                title: {
                    $containsi: key
                }
            },
            populate: {
                category: {},
                authors: {
                    populate: ['profile_photo']
                },
                cover_image: {},
                tags: {}
            }
        });
    }
}
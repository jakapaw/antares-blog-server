/**
 * article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async findOneBySlug(ctx) {
        try {
            const slug = ctx.params.slug;
            const article = await strapi.entityService.findMany('api::article.article', {
                fields: ['id', 'slug', 'updatedAt', 'title', 'content_summary', 'content'],
                populate: {
                    cover_image: {},
                    category: {},
                    createdBy: {},
                    localizations: {},
                    metadata: {},
                    tags: {},
                    authors: {
                        populate: ['profile_photo', 'social_media']
                    }
                },
                filters: {
                    slug: slug
                }
            });
            if (article.length == 0) {
                return null;
            }
            return article;
        } catch (error) {
            ctx.onerror(error);
        }
    },

    async search(ctx) {
        const key = ctx.request.query["key"];
        if (!key) {
            ctx.badRequest('key query parameter is undefined');
        }
        try {
            const articles = await strapi.service('api::article.search').searchTitle(key);
            if (articles.length == 0) {
                return null;
            }
            return articles;
        } catch (error) {
            ctx.onerror(error);
        }
    }
}));

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
            if (article.length == 1) {
                return article;
            } else {
                return null;
            }
        } catch (error) {
            ctx.onerror(error);
        }
    }
}));

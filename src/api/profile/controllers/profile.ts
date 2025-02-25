/**
 * profile controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::profile.profile', ({strapi}) => ({
    async findOneBySlug(ctx) {
        try {
            const slug = ctx.params.slug;
            const profile = await strapi.entityService.findMany('api::profile.profile', {
                fields: ['id', 'username', 'fullname', 'headline', 'profile_summary'],
                populate: ['profile_photo', 'social_media', 'other_link'],
                filters: {
                    username: slug
                }
            });
            if (profile.length == 1) {
                return profile;
            } else {
                return null;
            }
        } catch (error) {
            ctx.onerror(error);
        }
    }
}));

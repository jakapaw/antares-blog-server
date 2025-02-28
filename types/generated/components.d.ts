import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleTags extends Struct.ComponentSchema {
  collectionName: 'components_article_tags';
  info: {
    description: '';
    displayName: 'tags';
    icon: 'hashtag';
  };
  attributes: {
    tag: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 25;
      }>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UserOtherLink extends Struct.ComponentSchema {
  collectionName: 'components_user_other_links';
  info: {
    displayName: 'Other Link';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface UserSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_user_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'paperPlane';
  };
  attributes: {
    link: Schema.Attribute.String;
    social_media_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.tags': ArticleTags;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'user.other-link': UserOtherLink;
      'user.social-media': UserSocialMedia;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface HtmlHtmLmeta extends Struct.ComponentSchema {
  collectionName: 'components_html_htm_lmetas';
  info: {
    displayName: 'HTMLmeta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TokenSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_token_social_links';
  info: {
    description: '';
    displayName: 'SocialLinks';
  };
  attributes: {
    discord: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    github: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    telegram: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface TokenTokenInfoShared extends Struct.ComponentSchema {
  collectionName: 'components_token_token_info_shareds';
  info: {
    displayName: 'TokenInfoShared';
  };
  attributes: {
    coingeckoId: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Symbol: Schema.Attribute.String;
    tokenName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'html.htm-lmeta': HtmlHtmLmeta;
      'token.social-links': TokenSocialLinks;
      'token.token-info-shared': TokenTokenInfoShared;
    }
  }
}

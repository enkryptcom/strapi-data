import type { Attribute, Schema } from '@strapi/strapi';

export interface HtmlHtmLmeta extends Schema.Component {
  collectionName: 'components_html_htm_lmetas';
  info: {
    displayName: 'HTMLmeta';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface TokenSocialLinks extends Schema.Component {
  collectionName: 'components_token_social_links';
  info: {
    description: '';
    displayName: 'SocialLinks';
  };
  attributes: {
    discord: Attribute.String;
    facebook: Attribute.String;
    github: Attribute.String;
    instagram: Attribute.String;
    linkedin: Attribute.String;
    telegram: Attribute.String;
    twitter: Attribute.String;
    youtube: Attribute.String;
  };
}

export interface TokenTokenInfoShared extends Schema.Component {
  collectionName: 'components_token_token_info_shareds';
  info: {
    displayName: 'TokenInfoShared';
  };
  attributes: {
    coingeckoId: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Symbol: Attribute.String;
    tokenName: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'html.htm-lmeta': HtmlHtmLmeta;
      'token.social-links': TokenSocialLinks;
      'token.token-info-shared': TokenTokenInfoShared;
    }
  }
}

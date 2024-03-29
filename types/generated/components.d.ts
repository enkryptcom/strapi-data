import type { Schema, Attribute } from '@strapi/strapi';

export interface HtmlHtmLmeta extends Schema.Component {
  collectionName: 'components_html_htm_lmetas';
  info: {
    displayName: 'HTMLmeta';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface TokenSocialLinks extends Schema.Component {
  collectionName: 'components_token_social_links';
  info: {
    displayName: 'SocialLinks';
    description: '';
  };
  attributes: {
    facebook: Attribute.String;
    twitter: Attribute.String;
    instagram: Attribute.String;
    github: Attribute.String;
    youtube: Attribute.String;
    telegram: Attribute.String;
    linkedin: Attribute.String;
    discord: Attribute.String;
  };
}

export interface TokenTokenInfoShared extends Schema.Component {
  collectionName: 'components_token_token_info_shareds';
  info: {
    displayName: 'TokenInfoShared';
  };
  attributes: {
    tokenName: Attribute.String;
    coingeckoId: Attribute.String;
    icon: Attribute.Media;
    Symbol: Attribute.String;
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

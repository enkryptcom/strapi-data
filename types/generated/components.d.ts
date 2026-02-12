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

export interface MobileMarketItemCollectionGroupContent
  extends Struct.ComponentSchema {
  collectionName: 'components_mobile_market_item_collection_group_contents';
  info: {
    displayName: 'market-item-collection-group-content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    group_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    items: Schema.Attribute.Relation<
      'oneToMany',
      'api::mobile-market-collection.mobile-market-collection'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MobileMarketItemCollectiongroup
  extends Struct.ComponentSchema {
  collectionName: 'components_mobile_market_item_collectiongroups';
  info: {
    displayName: 'market-item-collection-group';
  };
  attributes: {
    component_type: Schema.Attribute.Enumeration<['collection_group']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'collection_group'>;
    group: Schema.Attribute.Component<
      'mobile.market-item-collection-group-content',
      false
    > &
      Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['pager']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'pager'>;
  };
}

export interface MobileMarketItemFaq extends Struct.ComponentSchema {
  collectionName: 'components_mobile_market_item_faqs';
  info: {
    displayName: 'market-item-faq';
  };
  attributes: {
    component_type: Schema.Attribute.Enumeration<['faq']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'faq'>;
    faq: Schema.Attribute.Component<'mobile.market-item-faq-content', false> &
      Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['list']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'list'>;
    title_private: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MobileMarketItemFaqContent extends Struct.ComponentSchema {
  collectionName: 'components_mobile_market_item_faq_contents';
  info: {
    displayName: 'market-item-faq-content';
  };
  attributes: {
    faq_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    is_rwa_restricted: Schema.Attribute.Boolean & Schema.Attribute.Required;
    items: Schema.Attribute.Relation<
      'oneToMany',
      'api::mobile-market-faq.mobile-market-faq'
    >;
    title: Schema.Attribute.String;
  };
}

export interface MobileMarketItemSystem extends Struct.ComponentSchema {
  collectionName: 'components_mobile_market_item_systems';
  info: {
    displayName: 'market-item-system';
  };
  attributes: {
    component_type: Schema.Attribute.Enumeration<['system']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'system'>;
    data_type: Schema.Attribute.Enumeration<['crypto', 'stocks', 'all']>;
    min_version: Schema.Attribute.Relation<
      'oneToOne',
      'api::mobile-market-appversion.mobile-market-appversion'
    >;
    style: Schema.Attribute.Enumeration<['default']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
    type: Schema.Attribute.Enumeration<['system_filters', 'system_recent']>;
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
      'mobile.market-item-collection-group-content': MobileMarketItemCollectionGroupContent;
      'mobile.market-item-collectiongroup': MobileMarketItemCollectiongroup;
      'mobile.market-item-faq': MobileMarketItemFaq;
      'mobile.market-item-faq-content': MobileMarketItemFaqContent;
      'mobile.market-item-system': MobileMarketItemSystem;
      'token.social-links': TokenSocialLinks;
      'token.token-info-shared': TokenTokenInfoShared;
    }
  }
}

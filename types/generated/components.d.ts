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

export interface RewardsCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_rewards_cta_buttons';
  info: {
    description: 'Button rendered inside the reward info card; theme maps to a frontend button variant';
    displayName: 'CtaButton';
  };
  attributes: {
    theme: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface RewardsHowToEarnStep extends Struct.ComponentSchema {
  collectionName: 'components_rewards_how_to_earn_steps';
  info: {
    description: "One arrow-bulleted line in the 'How to earn this reward' list";
    displayName: 'HowToEarnStep';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface RewardsPlatform extends Struct.ComponentSchema {
  collectionName: 'components_rewards_platforms';
  info: {
    description: 'Platform pill shown on campaign cards and detail hero';
    displayName: 'Platform';
  };
  attributes: {
    product: Schema.Attribute.Enumeration<
      ['MEW Mobile', 'MEW Portfolio', 'MEW web', 'Enkrypt']
    > &
      Schema.Attribute.Required;
  };
}

export interface RewardsRewardInfo extends Struct.ComponentSchema {
  collectionName: 'components_rewards_reward_infos';
  info: {
    description: 'Blue reward panel on the campaign detail page';
    displayName: 'RewardInfo';
  };
  attributes: {
    cta: Schema.Attribute.Component<'rewards.cta-button', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RewardsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_rewards_stat_items';
  info: {
    description: "One column in the 'Rewards in numbers' bar";
    displayName: 'StatItem';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RewardsTerms extends Struct.ComponentSchema {
  collectionName: 'components_rewards_terms';
  info: {
    description: 'Terms block on the campaign detail page';
    displayName: 'Terms';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'rewards.cta-button': RewardsCtaButton;
      'rewards.how-to-earn-step': RewardsHowToEarnStep;
      'rewards.platform': RewardsPlatform;
      'rewards.reward-info': RewardsRewardInfo;
      'rewards.stat-item': RewardsStatItem;
      'rewards.terms': RewardsTerms;
      'token.social-links': TokenSocialLinks;
      'token.token-info-shared': TokenTokenInfoShared;
    }
  }
}

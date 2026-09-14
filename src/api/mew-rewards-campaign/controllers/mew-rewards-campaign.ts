/**
 * mew-rewards-campaign controller
 *
 * The attribute is named `campaign_status` because `status` is reserved by
 * Strapi's draft & publish; responses expose it as `status` per the API contract.
 */

import { factories } from '@strapi/strapi';

const UID = 'api::mew-rewards-campaign.mew-rewards-campaign';

const toCampaign = (entity: any) => ({
  id: entity.slug,
  product: (entity.products ?? []).map((p: any) => p.product),
  title: entity.title,
  description: entity.description,
  cta: entity.cta,
  status: entity.campaign_status,
});

const toCampaignDetail = (entity: any) => ({
  ...toCampaign(entity),
  long_description: entity.long_description ?? '',
  reward_info: entity.reward_info
    ? {
        title: entity.reward_info.title,
        subtitle: entity.reward_info.subtitle ?? '',
        cta: (entity.reward_info.cta ?? []).map((button: any) => ({
          title: button.title,
          theme: button.theme,
        })),
      }
    : null,
  how_to_earn: (entity.how_to_earn ?? []).map((step: any) => step.text),
  terms: entity.terms
    ? {
        title: entity.terms.title,
        description: entity.terms.description,
      }
    : null,
});

export default factories.createCoreController(UID, ({ strapi }) => ({
  // GET /campaigns — ended campaigns are excluded from the list
  async findCampaigns(ctx) {
    const entities = await strapi.documents(UID).findMany({
      status: 'published',
      filters: { campaign_status: { $ne: 'ended' } },
      populate: { products: true },
      sort: 'createdAt:desc',
    });

    ctx.body = entities.map(toCampaign);
  },

  // GET /campaigns/:id — id is the campaign slug; includes ended campaigns
  async findCampaignBySlug(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.documents(UID).findFirst({
      status: 'published',
      filters: { slug: id },
      populate: {
        products: true,
        reward_info: { populate: { cta: true } },
        how_to_earn: true,
        terms: true,
      },
    });

    if (!entity) {
      return ctx.notFound('Campaign not found');
    }

    ctx.body = toCampaignDetail(entity);
  },
}));

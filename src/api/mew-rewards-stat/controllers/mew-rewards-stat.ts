/**
 * mew-rewards-stat controller
 */

import { factories } from '@strapi/strapi';

const UID = 'api::mew-rewards-stat.mew-rewards-stat';

export default factories.createCoreController(UID, ({ strapi }) => ({
  // GET /rewards/stats — drives the "Rewards in numbers" section
  async findStats(ctx) {
    const entity = await strapi.documents(UID).findFirst({
      status: 'published',
      populate: { items: true },
    });

    ctx.body = {
      enabled: Boolean(entity?.enabled),
      items: (entity?.items ?? []).map((item: any) => ({
        name: item.name,
        number: item.number,
      })),
    };
  },
}));

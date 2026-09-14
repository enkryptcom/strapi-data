/**
 * mew-rewards-campaign custom router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/campaigns',
      handler: 'mew-rewards-campaign.findCampaigns',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/campaigns/:id',
      handler: 'mew-rewards-campaign.findCampaignBySlug',
      config: { auth: false },
    },
  ],
};

/**
 * mew-rewards-stat custom router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/rewards/stats',
      handler: 'mew-rewards-stat.findStats',
      config: { auth: false },
    },
  ],
};

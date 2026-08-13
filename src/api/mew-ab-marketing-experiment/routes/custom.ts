/**
 * mew-ab-marketing-experiment custom router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/mew-marketing',
      handler: 'mew-ab-marketing-experiment.find',
    },
  ],
};

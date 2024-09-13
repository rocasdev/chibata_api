'use strict';

/**
 * event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event.event', {
  config: {
    find: {
      auth: false,  // O ajusta según sea necesario
    },
  },
  routes: [
    {
      method: 'GET',
      path: '/events/count',
      handler: 'event.count',
      config: {
        auth: false, // Configura autenticación según sea necesario
      },
    },
  ],
});

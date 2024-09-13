'use strict';

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  // Método personalizado para contar eventos
  async count(ctx) {
    try {
      // Usamos el query builder de Strapi para contar los eventos
      const count = await strapi.db.query('api::event.event').count();
      ctx.body = { count };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));

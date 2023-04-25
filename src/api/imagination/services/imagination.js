'use strict';

/**
 * imagination service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::imagination.imagination');

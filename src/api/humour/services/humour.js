'use strict';

/**
 * humour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::humour.humour');

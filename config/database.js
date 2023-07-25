const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'dpg-civosfenqql48o18gn40-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'the411_eyaw'),
        user: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'Bh1fxeEWlZia5xD0hsaKcem7RDPUXg47'),
        ssl: env.bool('DATABASE_SSL', true) && {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { 
        min: env.int('DATABASE_POOL_MIN', 2), 
        max: env.int('DATABASE_POOL_MAX', 10) 
      },
    },
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'NbZJDTu40sndJYAPZk40KQ=='),
      },
    },
    jwt: {
      secret: env('JWT_SECRET', 'Xe9bNDZHPJ6ESVu7WVN4YA=='),
    },
    cloudinary: {
      name: env('CLOUDINARY_NAME', 'do9dqypsx'),
      key: env('CLOUDINARY_KEY', '591899949212852'),
      secret: env('CLOUDINARY_SECRET', 'ScVJvy7LFKKfRtM3O-wBXp2bq-M'),
    },
    
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DATABASE_FILENAME', 'data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};














// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
//     mysql: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     mysql2: {
//       connection: {
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'dpg-ch414133cv21aod1aj60-a.oregon-postgres.render.com'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'the411'),
//         user: env('DATABASE_USERNAME', 'admin'),
//         password: env('DATABASE_PASSWORD', 'zj16Rt8EmOuRJssCNM7Hz3RvTVbjjvLd'),
//         ssl: env.bool('DATABASE_SSL', true) && {
//           rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: { 
//         min: env.int('DATABASE_POOL_MIN', 2), 
//         max: env.int('DATABASE_POOL_MAX', 10) 
//       },
//     },
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', 'data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//           },
//         };
//       };





















// const path = require('path');

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
//     mysql: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     mysql2: {
//       connection: {
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         user: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     postgres: {
//       connection: {
//         connectionString: env('DATABASE_URL'),
//         host: env('DATABASE_HOST', 'dpg-ch414133cv21aod1aj60-a.oregon-postgres.render.com'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'the411'),
//         user: env('DATABASE_USERNAME', 'admin'),
//         password: env('DATABASE_PASSWORD', 'zj16Rt8EmOuRJssCNM7Hz3RvTVbjjvLd'),
//         ssl: env.bool('DATABASE_SSL', true) && {
//           rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: { 
//         min: env.int('DATABASE_POOL_MIN', 2), 
//         max: env.int('DATABASE_POOL_MAX', 10) 
//       },
//     },
//     host: env('HOST', '0.0.0.0'),
//     port: env.int('PORT', 1337),
//     admin: {
//       auth: {
//         secret: env('ADMIN_JWT_SECRET', 'NbZJDTu40sndJYAPZk40KQ=='),
//       },
//     },
//     jwt: {
//       secret: env('JWT_SECRET', 'Xe9bNDZHPJ6ESVu7WVN4YA=='),
//     },
//     cloudinary: {
//       name: env('CLOUDINARY_NAME', 'do9dqypsx'),
//       key: env('CLOUDINARY_KEY', '591899949212852'),
//       secret: env('CLOUDINARY_SECRET', 'ScVJvy7LFKKfRtM3O-wBXp2bq-M'),
//     },
    
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', 'data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },
//   };

//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };























// postgres: {
//   connection: {
//     connectionString: env('DATABASE_URL'),
//     host: env('DATABASE_HOST', 'localhost'),
//     port: env.int('DATABASE_PORT', 5432),
//     database: env('DATABASE_NAME', 'strapi'),
//     user: env('DATABASE_USERNAME', 'strapi'),
//     password: env('DATABASE_PASSWORD', 'strapi'),
//     ssl: env.bool('DATABASE_SSL', false) && {
//       key: env('DATABASE_SSL_KEY', undefined),
//       cert: env('DATABASE_SSL_CERT', undefined),
//       ca: env('DATABASE_SSL_CA', undefined),
//       capath: env('DATABASE_SSL_CAPATH', undefined),
//       cipher: env('DATABASE_SSL_CIPHER', undefined),
//       rejectUnauthorized: env.bool(
//         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//         true
//       ),
//     },
//     schema: env('DATABASE_SCHEMA', 'public'),
//   },
//   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
// },




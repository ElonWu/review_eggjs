import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    // 本地开发的表单验证，无法通过 csrf
    security: {
      csrf: false,
    },

    // 本地 mysql
    sequelize: {
      dialect: 'mysql',
      database: 'todo',
      host: 'localhost',
      port: 3306,
      username: process.env.LOCALE_MYSQL_USERNAME,
      password: process.env.LOCALE_MYSQL_PASSWORD,
      define: {
        freezeTableName: false,
        underscored: true,
      },
    },

    // 本地 redis
    redis: {
      client: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
        db: 0,
      },
      agent: true,
    },

    // socket-io
    // io: {
    //   init: {}, // passed to engine.io
    //   namespace: {
    //     '/': {
    //       connectionMiddleware: ['auth'],
    //       packetMiddleware: ['packet'],
    //     },
    //   },
    //   redis: {
    //     host: '127.0.0.1',
    //     port: 6379,
    //   },
    // },
  };
  return config;
};

import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

require('dotenv').config();

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + process.env.APP_KEY;

  config.middleware = ['logger', 'auth'];

  const bizConfig = {
    // session
    session: {
      renew: true,
    },

    // 自定义中间件
    logger: {
      warningThreshold: 500,
    },
    auth: {
      ignore: [
        ['POST', '/user'],
        ['POST', '/user/login'],
      ],
    },

    // 使用当前版本 sequelize
    Sequelize: require('sequelize'),
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};

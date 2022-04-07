import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    // 正式服 redis
    redis: {
      client: {
        host: 'xxx',
        port: 6379,
        password: 'xxx',
        db: 0,
      },
      agent: true,
    },
  };
  return config;
};

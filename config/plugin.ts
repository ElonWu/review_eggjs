import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  sessionRedis: {
    enable: true,
    package: 'egg-session-redis',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};

export default plugin;

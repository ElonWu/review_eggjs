import { Context } from 'egg';

module.exports = {
  schedule: {
    // interval: '10s', // 每10秒执行一次
    cron: '0 30 9 * * 1-5', // 周一到周五 早上9点30分执行
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx: Context) {
    ctx.logger.info('trigger');
  },
};

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    |
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, optional)

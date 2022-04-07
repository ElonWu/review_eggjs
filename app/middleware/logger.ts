import { Context } from 'egg';

module.exports = (options: { warningThreshold: number }) => {
  return async function logger(ctx: Context, next: () => Promise<any>) {
    const start = Date.now();

    await next();

    const cost = Date.now() - start;
    if (cost > options.warningThreshold) {
      ctx.logger.warn(`Request:${ctx.method} ${ctx.url}; Cost: ${cost}ms`);
    }
  };
};

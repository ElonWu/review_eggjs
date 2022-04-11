import { Context } from 'egg';

module.exports = ({ ignore = [] }: { ignore: string[][] }) => {
  return async function checkAuth(ctx: Context, next: () => Promise<any>) {
    const { method, url } = ctx.request;
    ctx.logger.info(`${method} ${url}`);
    const shouldIgnore = ignore.find(
      ([method, path]) =>
        ctx.request.method === method && ctx.request.path === path,
    );

    if (!shouldIgnore && !ctx.session.user) {
      ctx.throw(401, '请先登录');
    }

    await next();
  };
};

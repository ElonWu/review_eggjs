import { Controller } from 'egg';

const CreateRule = {
  name: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
};

export default class UserController extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = {
      message: 'hello egg js',
    };
  }

  async create() {
    const { ctx } = this;
    ctx.validate(CreateRule, ctx.request.body);

    const user = await ctx.model.User.register(ctx.request.body);

    ctx.body = user;
  }

  async login() {
    const { ctx } = this;

    let user;
    // 已经登录 通过 userId 查询
    const loginUser = ctx.session.user?.id;
    if (loginUser) {
      user = loginUser;
    }
    // 通过登录信息查询
    else {
      // 登录信息 格式验证失败
      const validateError = ctx.helper.validateError(
        ctx,
        CreateRule,
        ctx.request.body,
      );

      if (validateError) {
        ctx.body = {
          message: 'error',
          errors: validateError,
        };
        return;
      }

      // 登录信息查询
      user = await ctx.model.User.login(ctx.request.body);
      // 存储 session
      if (user) ctx.session.user = user;
    }

    if (!user) {
      ctx.status = 401;
      ctx.body = { message: 'error', error: `未查询到当前用户` };
    } else {
      ctx.body = { message: 'success', data: user };
    }
  }
}

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

    const userId = ctx.session.userId;

    let user;
    // 已经登录 通过 userId 查询
    if (userId) {
      user = await ctx.model.User.findUser(userId);
    }
    // 通过登录信息查询
    else {
      ctx.validate(CreateRule, ctx.request.body);
      user = await ctx.model.User.login(ctx.request.body);

      if (user?.id) ctx.session.userId = user.id;
    }

    ctx.body = {
      message: 'success',
      data: user,
    };
  }
}

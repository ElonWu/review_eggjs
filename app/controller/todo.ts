import { Controller } from 'egg';

const CreateRule = {
  title: {
    type: 'string',
    required: true,
  },
  desc: {
    type: 'string',
    required: true,
  },
};

export default class TodoController extends Controller {
  public async create() {
    const { ctx } = this;

    const userId = ctx.session.user?.id;

    ctx.validate(CreateRule, ctx.request.body);

    const todo = await ctx.model.Todo.addTodo(
      Object.assign({}, ctx.request.body, { userId }),
    );

    ctx.body = todo;
  }

  public async list() {
    const { ctx } = this;

    const userId = ctx.session.user?.id;

    const todoList = await ctx.model.Todo.findListByUser(userId);

    ctx.body = todoList;
  }

  public async complete() {
    const { ctx } = this;

    const userId = ctx.session.user?.id;

    await ctx.model.Todo.complete({ todoId: ctx.params.id, userId });

    ctx.body = {
      message: '更新为已完成',
    };
  }
}

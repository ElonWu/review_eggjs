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

    ctx.validate(CreateRule, ctx.request.body);

    ctx.body = ctx.request.body;
  }
}

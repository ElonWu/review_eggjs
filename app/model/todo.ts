import { Application } from 'egg';
import { Sequelize } from 'sequelize/types';

module.exports = (app: Application & { Sequelize: any; model: Sequelize }) => {
  const { STRING, INTEGER, ENUM } = app.Sequelize;

  const Todo = app.model.define('todo', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: STRING(30),
    desc: STRING(255),
    creatorId: INTEGER,
    status: {
      type: ENUM('pending', 'complete'),
      defaultValue: 'pending',
    },
  });

  // 查询用户 todo list
  // @ts-ignore
  Todo.addTodo = async function ({
    title,
    desc,
    userId,
  }: {
    title: string;
    desc: string;
    userId: number;
  }) {
    return this.create({
      title,
      desc,
      creatorId: userId,
    });
  };

  // 查询用户 todo list
  // @ts-ignore
  Todo.findListByUser = async function (userId: number) {
    return this.findAll({
      where: { creatorId: userId },
    });
  };

  // 完成 todo
  // @ts-ignore
  Todo.complete = async function ({
    todoId,
    userId,
  }: {
    todoId: number;
    userId: number;
  }) {
    return this.update(
      {
        status: 'complete',
      },
      {
        where: { id: todoId, creatorId: userId, status: 'pending' },
        returning: true,
      },
    );
  };

  return Todo;
};

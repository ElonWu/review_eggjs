import { Application } from 'egg';
import { Sequelize } from 'sequelize/types';

module.exports = (app: Application & { Sequelize: any; model: Sequelize }) => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING(30),
    password: STRING(32),
  });

  // 登录用户查询
  // @ts-ignore
  User.login = async function ({
    name,
    password,
  }: {
    name: string;
    password: string;
  }) {
    return this.findOne({
      where: { name, password },
    });
  };

  // userId 查询用户
  // @ts-ignore
  User.findUser = async function (userId: number) {
    return this.findOne({
      where: { id: userId },
    });
  };

  // 新增用户
  // @ts-ignore
  User.register = async function ({
    name,
    password,
  }: {
    name: string;
    password: string;
  }) {
    return this.create<any>({ name, password });
  };

  return User;
};

import { Application } from 'egg';
import { Sequelize } from 'sequelize/types';

module.exports = (app: Application & { model: Sequelize }) => {
  app.beforeStart(async function () {
    if (app.config.env === 'local' || app.config.env === 'unittest') {
      app.beforeStart(async () => {
        await app.model.sync({ alter: true });
      });
    }
  });
};

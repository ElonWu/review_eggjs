import { Application } from 'egg';

module.exports = (app: Application) => {
  app.router.post('/user', app.controller.user.create);
  app.router.post('/user/login', app.controller.user.login);
};

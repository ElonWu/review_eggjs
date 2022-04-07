import { Application } from 'egg';

module.exports = (app: Application) => {
  app.router.post('/todo', app.controller.todo.create);
};

import { Application } from 'egg';

module.exports = (app: Application) => {
  app.router.post('/todo', app.controller.todo.create);
  app.router.get('/todo/mine', app.controller.todo.list);
  app.router.put('/todo/:id/complete', app.controller.todo.complete);
};

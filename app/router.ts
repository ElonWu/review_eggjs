/* eslint-disable @typescript-eslint/no-var-requires */
import { Application } from 'egg';

export default (app: Application) => {
  app.router.get('/', app.controller.user.test);

  // @ts-ignore
  app.io.route('chat', app.io.controller.chat.ping);

  require('./routers/user')(app);
  require('./routers/todo')(app);
};

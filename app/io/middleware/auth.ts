import { Context } from 'egg';

module.exports = () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.socket.emit('res', 'connected!');
    await next();
    // execute when disconnect.
    console.log('disconnection!');
  };
};

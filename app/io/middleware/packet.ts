import { Context } from 'egg';

module.exports = () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.socket.emit('res', 'packet received!');
    // console.log('packet:', this.packet);
    await next();
  };
};

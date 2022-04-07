import { Controller } from 'egg';

export default class ChatController extends Controller {
  async ping() {
    const message = this.ctx.args[0];
    await this.ctx.socket.emit('response', `I've got your message: ${message}`);
  }
}

import { Context } from 'egg';

module.exports = {
  validateError(ctx: Context, rule: any, data: any): string | null {
    try {
      ctx.validate(rule, data);
    } catch (err) {
      const errors: { field: string; message: string }[] = (err as any).errors;

      return errors.reduce(
        (acc, { field, message }) => acc + `${field} ${message};`,
        '',
      );
    }

    return null;
  },
};

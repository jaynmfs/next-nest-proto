import * as Joi from 'joi';

export const customConfigSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  /**
   * TODO: For more env, specific type here to validate type of each env
   */
});

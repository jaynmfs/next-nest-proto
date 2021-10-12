import * as Joi from 'joi';

export const customConfigSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().port().default(3000),

  OPENAPI_PATH: Joi.string().default('/docs'),

  SERVICE_NAME: Joi.string().default('Service Name'),
  SERVICE_DESCRIPTION: Joi.string().default('Service Description'),
  SERVICE_VERSION: Joi.string().default('0.1'),

  THROTTLER_TTL: Joi.number().default(60),
  THROTTLER_LIMIT: Joi.number().default(10),

  MYSQL_HOST: Joi.string().default('127.0.0.1'),
  MYSQL_PORT: Joi.number().port().default(3306),
  MYSQL_USERNAME: Joi.string().required(),
  MYSQL_PASSWORD: Joi.string().required(),
  MYSQL_DATABASE: Joi.string().required(),

  /**
   * TODO: For more env, specific type here to validate type of each env
   */
});

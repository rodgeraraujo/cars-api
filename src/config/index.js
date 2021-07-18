/**
 * config  Namespace.
 * @namespace config
 *
 *
 * @description this namespace is a configuration of the project
 */

import pkg from '../../package.json';

import { config } from 'dotenv';
import { getEnv } from './environments';
config();

/**˝
 * moment configuration
 * @memberof config
 */
const momentConfig = {
  timezone: getEnv('TIMEZONE', 'America/Sao_Paulo'),
};

const envProdName = 'production';

/**
 * general application configuration
 * @memberof config
 */
const appConfig = {
  appName: getEnv('APP_NAME', pkg.name),
  isProduction: getEnv('NODE_ENV') === envProdName,
  envName: getEnv('NODE_ENV'),
  car: {
    tableName: 'cars',
  },
};

export { appConfig, envProdName, momentConfig };

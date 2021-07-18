/**
 * route http ports  Namespace.
 * @namespace ports/http/routes
 *
 *
 * @description this namespace is part of port http
 */

/**
 * Reference only imports (for documentation).
 */
// eslint-disable-next-line no-unused-vars
// import { AdapterInstance } from '../../../adapters';
// eslint-disable-next-line no-unused-vars
// import { Express } from 'express';
/**
 * Code imports.
 */
import { carRouter } from './car';
import { hearthRouter } from './hearth';

/**
 * @description Get route definitions.
 *
 * @memberof ports/http/routes
 * @function
 * @param {Logger} logger instance of logger
 * @param {AdapterInstance} adapter instantiated adapter
 * @param {Express} appp instantiated application express
 * @returns {getRoutesReturn}
 */
export const getRoutes = (logger, adapter, app) => {
  // Route cars
  app.use('/api/v1/cars', carRouter(logger, adapter));
  app.use('/hearth', hearthRouter(logger, adapter));

  return app;
};

/**
 * This callback is displayed as part of the getRoutes function.
 *
 * @memberof ports/http/routes
 * @callback getRoutesReturn
 * @param {Express} app - instance of express application
 * @returns {Express} express application with routes injected
 */

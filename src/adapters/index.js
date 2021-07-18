/**
 * Adapters  Namespace.
 * @namespace adapters
 *
 *
 * @description this namespace control communication between business and state-machines
 */

/**
 * @typedef {Object} Adapter
 * @property {CarAdapter} car car adapter instantied
 */

/**
 * Reference only imports (for documentation).
 */
// eslint-disable-next-line no-unused-vars
import { databaseRepository } from '../ports/state-machines';
// eslint-disable-next-line no-unused-vars
// import { CarAdapter } from './car';

import carAdapterFactory from './car';

/**
 * @description dynamo repository for state machine
 *
 * @memberof ports/state-machines
 * @function
 * @param {Logger} logger - Instance of logger.
 * @param {databaseRepository} repository repository instatiated
 * @returns {Adapter}
 */
export const adapter = (logger, repository) => {
  return {
    car: carAdapterFactory(logger, repository),
  };
};

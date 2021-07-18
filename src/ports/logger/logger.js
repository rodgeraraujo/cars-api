import cuid from 'cuid';

import pino from 'pino';

/**
 * xDevel microservices - escriba functions
 *
 * the objetive of this js module is
 *
 * - easy to test
 * - easy to inject mock in more than one level
 * - immutability and functional programming patterns
 */

/**
 * Configure logger for all handlers.
 *
 * @memberof ports/logger
 * @param {string} appName - name of application
 * @param {string} envName - environment of the application
 * @returns {handleLoggerReturn}
 */
const handleLogger = (appName, envName) => {
  const logger = pino();

  const info = (method, message) =>
    logger.info(message, { id: cuid(), from: { appName, method, envName } });
  const error = (method, message) =>
    logger.info(message, { id: cuid(), from: { appName, method, envName } });

  return {
    logger,
    info,
    error,
  };
};

export { handleLogger };

/**
 * Complex callbacks documentation.
 *
 */

/**
 * This callback is displayed as part of the handleLogger function.
 *
 * @memberof ports/logger
 * @callback handleLoggerReturn
 * @param {*} logger instance of the escriba
 * @param {handleLoggerMessageReturn} info  syntax suggar for logger.info method
 * @param {handleLoggerMessageReturn} error  syntax suggar for logger.error method
 * @returns {undefined}
 */

/**
 * This callback is displayed as part of the handleLoggerReturn function.
 *
 * @memberof ports/logger
 * @callback handleLoggerMessageReturn
 * @param {LoggerFuncParams} method info for method who call the log method
 * @param {LoggerFuncParams} message message of the log
 * @returns {undefined}
 */

/**
 * @memberof ports/logger
 * @typedef {Object} LoggerFuncParams
 * @property method: string
 * @property message: string
 */

/**
 * controller http ports  Namespace.
 * @namespace ports/http/controllers
 *
 *
 * @description this namespace is part of port http (controller section)
 */

/**
 * Reference only imports (for documentation).
 */
// eslint-disable-next-line no-unused-vars

export { createCar, deleteCar, getCar, getCars, updateCar } from './car';

/**
 * Complex callbacks documentation.
 *
 */

/**
 * This callback is displayed as part of the controllers function.
 *
 * @memberof ports/http/controllers
 * @callback ControllerCarReturn<T>
 * @param {Request} request from api in express port
 * @param {Response} _res response to send to caller
 * @param {NextFunction} next method to call in middlewares architecture
 * @returns {Promise<T>} Report.
 */

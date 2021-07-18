/**
 * Reference only imports (for documentation).
 */

// eslint-disable-next-line no-unused-vars
// import { Adapter } from '../../../adapters';

/**
 * @description Get Cars
 *
 * @memberof ports/http/controllers
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter adapter instantiated
 * @returns {ControllerCarReturn}
 */
export const getCars = (logger, adapter) => async (_req, _res, _next) => {
  try {
    return await adapter.car.getCars();
  } catch (error) {
    logger.error('api.controller.car.getCar', error);
    throw error;
  }
};

/**
 * @description Get Car by id
 *
 * @memberof ports/http/controllers
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter adapter instantiated
 * @returns {ControllerCarReturn}
 */
export const getCar = (logger, adapter) => async (req, _res, _next) => {
  try {
    return await adapter.car.getCar(req.params.id);
  } catch (error) {
    logger.error('api.controller.car.getCar', error);
    throw error;
  }
};

/**
 * @description Create Car
 *
 * @memberof ports/http/controllers
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter adapter instantiated
 * @returns {ControllerCarReturn}
 */
export const createCar = (logger, adapter) => async (req, _res, _next) => {
  try {
    /**
     * TODO validate body
     */
    return await adapter.car.createCar(req.body.data);
  } catch (error) {
    logger.error('api.controller.car.createCar', error);
    throw error;
  }
};

/**
 * @description Update Car
 *
 * @memberof ports/http/controllers
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter adapter instantiated
 * @returns {ControllerCarReturn}
 */
export const updateCar = (logger, adapter) => async (req, _res, _next) => {
  try {
    /**
     * TODO validate body
     */
    return await adapter.car.updateCar(req.params.id, req.body.data);
  } catch (error) {
    logger.error('api.controller.car.updateCar', error);
    throw error;
  }
};

/**
 * @description Delete Car
 *
 * @memberof ports/http/controllers
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter adapter instantiated
 * @returns {controllerCarReturn}
 */
export const deleteCar = (logger, adapter) => async (req, _res, _next) => {
  try {
    return await adapter.car.deleteCar(req.params.id);
  } catch (error) {
    logger.error('api.controller.car.deleteCar', error);
    throw error;
  }
};

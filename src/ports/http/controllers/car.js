/**
 * Reference only imports (for documentation).
 */
// eslint-disable-next-line no-unused-vars
// import { Request, Response, NextFunction } from 'express';
// eslint-disable-next-line no-unused-vars
import { adapter } from '../../../adapters';
// eslint-disable-next-line no-unused-vars
// import { ControllerCarReturn } from './index';

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
    const car = await adapter.car.getCar(req.params.id);
    return car;
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
    const car = await adapter.car.createCar(req.body.data);
    return car;
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
    const car = await adapter.car.updateCar(req.params.id, req.body.data);
    return car;
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
    const car = await adapter.car.deleteCar(req.params.id);
    return car;
  } catch (error) {
    logger.error('api.controller.car.deleteCar', error);
    throw error;
  }
};

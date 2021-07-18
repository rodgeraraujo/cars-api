/**
 * Reference only imports (for documentation).
 */
// eslint-disable-next-line no-unused-vars
// import { Adapter } from '../../../adapters/index';

/**
 * Code imports.
 */
import { Router } from 'express';
import { response } from './utils';
import { createCar, deleteCar, getCar, updateCar } from '../controllers/car';

const router = Router();

/**
 * @description Define the car routes.
 *
 * @memberof ports/http/routes
 * @function
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter instantiated adapter
 * @returns {Router}
 */

export const carRouter = (logger, adapter) => {
  /**
   * get task with existing id
   */
  router.get('/:id', (req, res, next) =>
    response(getCar(logger, adapter)(req, res, next), res, next),
  );

  /**
   * create task with existing id
   */
  router.post('/', (req, res, next) =>
    response(createCar(logger, adapter)(req, res, next), res, next),
  );

  /**
   * update task with existing id
   */
  router.put('/:id', (req, res, next) =>
    response(updateCar(logger, adapter)(req, res, next), res, next),
  );

  /**
   * delete task with existing id
   */
  router.delete('/:id', (req, res, next) =>
    response(deleteCar(logger, adapter)(req, res, next), res, next),
  );

  return router;
};

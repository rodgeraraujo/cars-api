import { Router } from 'express';
import { response } from './utils';
import {
  createCar,
  deleteCar,
  getCar,
  getCars,
  updateCar,
} from '../controllers/car';

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
   * get cars
   */
  router.get('/', (req, res, next) =>
    response(getCars(logger, adapter)(req, res, next), res, next),
  );

  /**
   * get car with existing id
   */
  router.get('/:id', (req, res, next) =>
    response(getCar(logger, adapter)(req, res, next), res, next),
  );

  /**
   * create car with existing id
   */
  router.post('/', (req, res, next) =>
    response(createCar(logger, adapter)(req, res, next), res, next),
  );

  /**
   * update car with existing id
   */
  router.put('/:id', (req, res, next) =>
    response(updateCar(logger, adapter)(req, res, next), res, next),
  );

  /**
   * delete car with existing id
   */
  router.delete('/:id', (req, res, next) =>
    response(deleteCar(logger, adapter)(req, res, next), res, next),
  );

  return router;
};

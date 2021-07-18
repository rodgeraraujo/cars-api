/**
 * Code imports.
 */
import { Router } from 'express';

const router = Router();

/**
 * @description Define the hearth router.
 *
 * @memberof ports/http/routes
 * @function
 * @param {Logger} logger instance of logger
 * @param {Adapter} adapter instantiated adapter
 * @returns {Router}
 */

export const hearthRouter = (_logger, _adapter) => {
  /**
   * get api hearth
   */
  router.get('/', (_req, res, _next) =>
    res.status(200).json({
      message: 'API running oK',
    }),
  );

  return router;
};

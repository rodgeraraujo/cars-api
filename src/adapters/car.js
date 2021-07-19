/**
 * Reference only imports (for documentation)
 */
// eslint-disable-next-line no-unused-vars
import { databaseRepository } from '../ports/state-machines';

/**
 * code imports
 */
import {
  // eslint-disable-next-line no-unused-vars
  CustomError,
  NotFoundError,
  EClassError,
  throwCustomError,
} from '../utils';

/**
 * @description Car adapter factory
 * @memberof adapters
 * @function
 * @param {Logger} logger instance of logger
 * @param {databaseRepository} repository state-machine database methods
 * @returns {CarAdapter} car adapter instantied
 */
const carAdapterFactory = (logger, repository) => ({
  getCar: getCar(logger, repository),
  getCars: getCars(logger, repository),
  createCar: createCar(logger, repository),
  updateCar: updateCar(logger, repository),
  deleteCar: deleteCar(logger, repository),
});

export default carAdapterFactory;

/**
 * @description Handler function to get car data by id.
 * @memberof adapters
 * @async
 * @function
 * @throws {CustomError}
 * @param {databaseRepository} repository - State-machine database methods.
 * @returns {getCarReturn} GetDocument method ready to execute.
 */
const getCar = (logger, repository) => async id => {
  const methodPath = 'adapters.car.getCar';
  try {
    return await repository.get({ id });
  } catch (error) {
    throwCustomError(error, methodPath, EClassError.INTERNAL);
  }
};

/**
 * @description Handler function to get cars data.
 * @memberof adapters
 * @async
 * @function
 * @throws {CustomError}
 * @param {databaseRepository} repository - State-machine database methods.
 * @returns {getCarReturn} GetDocument method ready to execute.
 */
const getCars = (logger, repository) => async () => {
  const methodPath = 'adapters.car.getCars';
  try {
    return await repository.list();
  } catch (error) {
    throwCustomError(error, methodPath, EClassError.INTERNAL);
  }
};

/**
 * @description Create car in the DynamoDB.
 * @memberof adapters
 * @async
 * @function
 * @throws {CustomError}
 * @param {Logger} logger instance of logger
 * @param {databaseRepository} repository state-machine database methods
 * @returns {createCarReturn} function to call createCar direct
 */
const createCar = (_logger, repository) => async params => {
  const methodPath = 'adapters.car.createCar';
  try {
    return await repository.post(params);
  } catch (error) {
    throwCustomError(error, methodPath, EClassError.INTERNAL);
  }
};

/**
 * @description Update car in the DynamoDB.
 * @memberof adapters
 * @async
 * @function
 * @throws {CustomError}
 * @param {Logger} logger instance of logger
 * @param {DatabaseRepositoryInstance} _repository state-machine database methods
 * @returns {updateCarReturn} function to call updateCar direct
 */
const updateCar = (logger, repository) => async (id, params) => {
  const methodPath = 'adapters.car.updateCar';
  try {
    const currObject = await getCar(logger, repository)(id);

    if (!currObject) {
      throwCustomError(
        new NotFoundError('Not found with id: ' + id),
        methodPath,
        EClassError.NOT_FOUND,
      );
    }

    // send report to existing car previous created
    const item = await repository.put({ id }, params);

    // return updated item
    return item;
  } catch (error) {
    throwCustomError(error, methodPath, EClassError.INTERNAL);
  }
};

/**
 * @description delete car in the DynamoDB.
 * @memberof adapters
 * @async
 * @function
 * @throws {CustomError}
 * @param {Logger} logger instance of logger
 * @param {databaseRepository} repository state-machine database methods
 * @returns {deleteCaReturn} function to call deleteCa direct
 */
const deleteCar = (logger, repository) => async id => {
  const methodPath = 'adapters.car.deleteCar';

  try {
    const currObject = await getCar(logger, repository)(id);

    if (!currObject) {
      throwCustomError(
        new NotFoundError('Not found with id: ' + id),
        methodPath,
        EClassError.NOT_FOUND,
      );
    }

    await repository.delete({ id });
  } catch (error) {
    throwCustomError(error, methodPath, EClassError.INTERNAL);
  }
};

/**
 * complex callbacks documentation
 *
 */

/**
 * @typedef {Object} CarAdapter
 * @property {getCarsReturn} getCars function to get list of cars by id (instantied)
 * @property {getCarReturn} getCar function to get car by id (instantied)
 * @property {createCarReturn} createCar function to create car (instantiated).
 * @property {updateCarReturn} updateCar function to update car  (instantiated).
 * @property {deleteCarReturn} deleteCar function to delete car (instantiated).
 */

/**
 * This callback is displayed as part of the createCar function.
 * @memberof adapters
 * @callback createCarReturn
 * @param {MutateCarInput} params input param for createCar
 * @param {string} owner of the data entry logged
 * @returns {Promise<Car>} new report data
 */

/**
 * This callback is displayed as part of the updateCar function.
 * @memberof adapters
 * @callback updateCarReturn
 * @param {string} id id of the current data for update
 * @param {MutateCarInput} params input param for updateCar
 * @param {string} owner of the data entry logged
 * @returns {Promise<Car>} new report data
 */

/**
 * This callback is displayed as part of the deleteCar function.
 * @memberof adapters
 * @callback deleteCaReturn
 * @param {string} id id of the current data for update
 * @param {string} owner of the data entry logged
 * @returns {Promise<Car>} new report data
 */

/**
 * This callback is displayed as part of the getCar function.
 * @memberof adapters
 * @callback getCarReturn
 * @param {string} id key of the data
 * @returns {Promise<Car>} task from repository
 */

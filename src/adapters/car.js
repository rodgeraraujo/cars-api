/**
 * Reference only imports (for documentation)
 */
// eslint-disable-next-line no-unused-vars
import { databaseRepository } from '../ports/state-machines';
// eslint-disable-next-line no-unused-vars
// import { MutateCarInput, Car, CarKey } from '../business';

/**
 * code imports
 */
import {
  // eslint-disable-next-line no-unused-vars
  CustomError,
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
  getCar: getCar(repository),
  createCar: createCar(logger, repository),
  updateCar: updateCar(logger, repository),
  deleteCar: deleteCar(logger, repository),
});

export default carAdapterFactory;

/**
 * @description Handler function to get car data by id .
 * @memberof adapters
 * @async
 * @function
 * @throws {CustomError}
 * @param {databaseRepository} repository - State-machine database methods.
 * @returns {getCarReturn} GetDocument method ready to execute.
 */
const getCar = repository => async id => {
  const methodPath = 'adapters.car.getCar';
  try {
    return await repository.get({ id });
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
const createCar = (logger, repository) => async params => {
  const methodPath = 'adapters.car.createCar';
  try {
    const documentInserted = await repository.put(params);

    logger.info({
      action: 'CAR_CREATED',
      method: methodPath,
      data: { documentInserted },
    });

    return documentInserted;
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
const updateCar = (_logger, _repository) => async (_id, _params, _user) => {
  const error = new Error('Not implemented yet');
  const methodPath = 'adapters.car.updateCar';
  throwCustomError(error, methodPath, EClassError.INTERNAL);
  // const methodPath = 'adapters.car.updateCar';
  // try {
  //   const currObject = await getCar(repository)(id);

  //   const ExpressionAttributeValues = validateupdateCar(
  //     params,
  //     currObject,
  //     user,
  //   );

  //   const UpdateExpression = `
  //   set taskOrder = :taskOrder,
  //       taskDescription = :taskDescription,
  //       taskStatus = :taskStatus,
  //       taskPriority = :taskPriority,
  //       lastUpdateDate = :lastUpdateDate
  //   `;
  //   // send report to existing car previous created
  //   const task = await repository.updateDocument(
  //     { id },
  //     UpdateExpression,
  //     ExpressionAttributeValues,
  //   );

  //   // log report data
  //   logger.info({
  //     action: 'TASK_UPDATED',
  //     method: methodPath,
  //     data: task,
  //   });

  //   // return updated item
  //   return task;
  // } catch (error) {
  //   throwCustomError(error, methodPath, EClassError.INTERNAL);
  // }
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
const deleteCar = (_logger, _repository) => async (_id, _user) => {
  const methodPath = 'adapters.car.deleteCar';
  const error = new Error('Not implemented yet');
  throwCustomError(error, methodPath, EClassError.INTERNAL);

  // try {
  //   const currObject = validatedeleteCar(await getCar(repository)(id), user);
  //   await repository.deleteDocument({ id });

  //   // log report data
  //   escriba.info({
  //     action: 'TASK_DELETED',
  //     method: methodPath,
  //     data: currObject,
  //   });

  //   return currObject;
  // } catch (error) {
  //   throwCustomError(error, methodPath, EClassError.INTERNAL);
  // }
};

/**
 * complex callbacks documentation
 *
 */

/**
 * @typedef {Object} CarAdapter
 * @property {getCarReturn} getCar function to get task by id (instantied)
 * @property {createCarReturn} createCar function to generate task (instantiated).
 * @property {updateCarReturn} updateCar function to update task  (instantiated).
 * @property {deleteCarReturn} deleteCar function to delete task (instantiated).
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

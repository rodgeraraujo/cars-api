/**
 * StateMachines  Namespace.
 * @namespace ports/state-machines
 *
 *
 * @description this namespace control state-machine api methods
 */

/***
 * repositories
 * dynamo and sqs are used in repositories
 */

/**
 * @description dynamo repository for state machine
 *
 * @memberof ports/state-machines
 * @function
 * @param {DynamoDB.DocumentClient} dynamo instance of dynamo api
 * @returns {DynamoRepositoryInstance} instance of repository for database
 */
export const databaseRepository = (_dynamo, tableName) => {
  console.log(`update ${tableName}`);
  return {
    update: (dynamo, tableName) => console.log(`update ${tableName}`),
    get: (dynamo, tableName) => console.log(`get ${tableName}`),
    put: (dynamo, tableName) => console.log(`put ${tableName}`),
    delete: (dynamo, tableName) => console.log(`delete ${tableName}`),
  };
};

/***
 * type definitions for complex objects
 * this helps documentation
 */

/**
 * @typedef {Object} PayloadValue
 * @property {string} key  unique key on tupple
 * @property {EVariableType} type  type of the key for cast operations
 * @property {string} value value of the variable in payload
 */

/**
 * @typedef {Object} DynamoRepositoryInstance
 *
 * @property {update} updateDocument function to update existing document (instantiated).
 * @property {get} getDocument function to get existing document (instantiated).
 * @property {put} putDocument function to create existing document (instantiated).
 * @property {delete} deleteDocument function to delete existing document (instantiated).
 */

/**
 * This callback is displayed as part of the updateDocument (inner DynamoRepositoryInstance) function.
 *
 * @callback updateDocumentReturn
 * @param {Object} key - object of keys table parameters to search
 * @returns {Object} - object sended
 */

/**
 * This callback is displayed as part of the getDocument (inner DynamoRepositoryInstance) function.
 *
 * @callback getDocumentReturn
 * @param {Object} key - object of keys table parameters to search
 * @param {DynamoDB.UpdateExpression} updateExpression  dynamo notation of the update document expression without values to change
 * @param {Object} expressionAttributeValues  values to be mapped in updateExpression expression
 * @returns {Object} - object updated from state-machine
 */

/**
 * This callback is displayed as part of the putDocument (inner DynamoRepositoryInstance) function.
 *
 * @callback putDocumentReturn
 * @param {Object} item - object to persist
 */

/**
 * This callback is displayed as part of the deleteDocument (inner DynamoRepositoryInstance) function.
 *
 * @callback deleteDocumentReturn
 * @param {Object} key - key of the data
 */

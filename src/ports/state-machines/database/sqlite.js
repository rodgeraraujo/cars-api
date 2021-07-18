// eslint-disable-next-line no-unused-vars
import sqlite3 from 'sqlite3';

/**
 * Code imports.
 */
import { classError } from '../contants';
import { throwCustomError } from '../../../utils';

/**
 * Insert a item on table TableName in the SQLite3.
 *
 * @memberof ports/state-machines
 * @async
 * @function
 * @throws {CustomError}
 * @param {sqlite3} db instance of SQLite3
 * @param {string} tableName name of table in database
 * @returns {saveItemReturn} Object saved in table
 */
export const saveItem = (db, tableName) => async item => {
  try {
    const params = Object.keys(item).join(',');

    let sql = `INSERT INTO ${tableName} (${params}) VALUES (?,?,?,?,?,?)`;

    db.serialize(function () {
      db.run(sql, item, function (error) {
        if (error) {
          throwCustomError(
            error,
            'state-machines.database.sqlite.saveItem',
            classError.INTERNAL,
          );
        } else return;
      });
    });
  } catch (error) {
    throwCustomError(
      error,
      'state-machines.database.sqlite.saveItem',
      classError.INTERNAL,
    );
  }
};

/**
 * Get a item on table TableName in the SQLite3.
 *
 * @memberof ports/state-machines
 * @async
 * @function
 * @throws {CustomError}
 * @param {sqlite3} db instance of SQLite3
 * @param {string} tableName name of table in database
 * @returns {getItemReturn} Object saved in table
 */
export const getItem = (_db, _tableName) => async _id => {
  throwCustomError(
    new Error('Not implemented'),
    'state-machines.database.sqlite.getItem',
    classError.INTERNAL,
  );
};

/**
 * Get a list of items on table TableName in the SQLite3.
 *
 * @memberof ports/state-machines
 * @async
 * @function
 * @throws {CustomError}
 * @param {sqlite3} db instance of SQLite3
 * @param {string} tableName name of table in database
 * @returns {listItemReturn} Object saved in table
 */
export const listItems = (_db, _tableName) => async () => {};

/**
 * Update data of item on table TableName in the SQLite3.
 *
 * @memberof ports/state-machines
 * @async
 * @function
 * @throws {CustomError}
 * @param {sqlite3} db instance of SQLite3
 * @param {string} tableName name of table in DynamoDB
 * @returns {putItemReturn} Object updated in table
 */
export const putItem = (_db, _tableName) => async (_id, _item) => {
  throwCustomError(
    new Error('Not implemented'),
    'state-machines.database.sqlite.putItem',
    classError.INTERNAL,
  );
};

/**
 * Delete a item on table TableName in the SQLite3.
 *
 * @memberof ports/state-machines
 * @async
 * @function
 * @throws {CustomError}
 * @param {sqlite3} db instance of Dynamo SDK for aws (DocumentClient)
 * @param {string} tableName name of table in SQLite3
 * @returns {deleteItemReturn} Object if deleted from table
 */
export const deleteItem = (_db, _tableName) => async _id => {
  throwCustomError(
    new Error('Not implemented'),
    'state-machines.database.sqlite.deleteItem',
    classError.INTERNAL,
  );
};

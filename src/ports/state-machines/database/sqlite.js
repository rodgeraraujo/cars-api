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
    const values = Object.values(item);

    let sql = `INSERT INTO ${tableName} (${params}) VALUES (?,?,?,?,?,?)`;
    return new Promise(function (resolve) {
      db.serialize(function () {
        db.run(sql, values, function (error, row) {
          if (error) {
            throwCustomError(
              error,
              'state-machines.database.sqlite.saveItem',
              classError.INTERNAL,
            );
          } else {
            console.log('inserted', row);
            resolve(item);
          }
        });
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
export const getItem = (db, tableName) => async params => {
  try {
    const { id } = params;
    let sql = `SELECT * FROM ${tableName} WHERE id == ${id} LIMIT 1`;
    return new Promise(function (resolve) {
      db.serialize(async () => {
        db.get(sql, (error, row) => {
          if (error) {
            throwCustomError(
              error,
              'state-machines.database.sqlite.getItem',
              classError.INTERNAL,
            );
            return;
          }
          resolve(row);
        });
      });
    });
  } catch (error) {
    throwCustomError(
      error,
      'state-machines.database.sqlite.getItem',
      classError.INTERNAL,
    );
  }
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
export const listItems = (db, tableName) => async () => {
  try {
    let sql = `SELECT * FROM ${tableName} LIMIT 100`;
    return new Promise(function (resolve) {
      db.serialize(async () => {
        db.all(sql, (error, rows) => {
          if (error) {
            throwCustomError(
              error,
              'state-machines.database.sqlite.listItems',
              classError.INTERNAL,
            );
            return;
          }
          resolve(rows);
        });
      });
    });
  } catch (error) {
    throwCustomError(
      error,
      'state-machines.database.sqlite.listItems',
      classError.INTERNAL,
    );
  }
};

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
export const putItem = (db, tableName) => async (params, item) => {
  try {
    const { id } = params;
    const sqlParams = `${Object.keys(item).join('=?, ')}=?`;
    const sql = `UPDATE ${tableName} SET ${sqlParams} WHERE id == ${id}`;
    const values = Object.values(item);

    return new Promise(function (resolve) {
      db.serialize(async () => {
        db.all(sql, values, error => {
          if (error) {
            throwCustomError(
              error,
              'state-machines.database.sqlite.putItem',
              classError.INTERNAL,
            );
            return;
          }
          resolve(true);
        });
      });
    });
  } catch (error) {
    throwCustomError(
      error,
      'state-machines.database.sqlite.listItems',
      classError.INTERNAL,
    );
  }
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
export const deleteItem = (db, tableName) => async params => {
  try {
    const { id } = params;
    let sql = `DELETE FROM ${tableName} WHERE id == ${id}`;
    return new Promise(function (resolve) {
      db.run(sql, error => {
        if (error) {
          throwCustomError(
            error,
            'state-machines.database.sqlite.listItems',
            classError.INTERNAL,
          );
        }
        resolve(true);
      });
    });
  } catch (error) {
    throwCustomError(
      error,
      'state-machines.database.sqlite.listItems',
      classError.INTERNAL,
    );
  }
};

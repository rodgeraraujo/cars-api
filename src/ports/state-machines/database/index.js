import sqlite3 from 'sqlite3';
import path from 'path';
import Debug from 'debug';

const debug = Debug('api-database');

const createDatabaseSqlite3 = () => {
  const __dirname = path.resolve();
  const databasePath = `${__dirname}/data/db.sqlite3`;

  const db = new sqlite3.Database(databasePath, err => {
    if (err) {
      debug('Erro opening database ' + err.message);
    }
  });

  if (db) {
    db.run(
      `CREATE TABLE cars(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                license_plate NVARCHAR(20)  NOT NULL,
                chassi NVARCHAR(20)  NOT NULL,
                renavam NVARCHAR(20),
                model NVARCHAR(100),
                brand NVARCHAR(100),
                year NVARCHAR(100)
            )`,
      err => {
        if (err) {
          debug('Table already exists.');
          return;
        }
        debug('Inserting default values.');
        let insert =
          'INSERT INTO cars (license_plate, chassi, renavam, model, brand, year) VALUES (?,?,?,?,?,?)';
        db.run(insert, [
          '4232-sad',
          '38943749233428237',
          '34234342434234',
          'Camaro',
          'Chevrolet',
          '2014',
        ]);
        db.run(insert, [
          '4533-dsf',
          '23122343324344324',
          '32434234234234',
          '911 Carrera',
          'Porsche',
          '2005',
        ]);
      },
    );
  }

  return db;
};

export const sqliteInstance = createDatabaseSqlite3();

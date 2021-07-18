/**
 * route http ports  Namespace.
 * @namespace ports/http
 *
 *
 * @description this namespace is part of port http
 */

import express from 'express';
import { databaseRepository } from '../state-machines';
import { adapter } from '../../adapters';
import { appConfig } from '../../config';
import { getRoutes } from './routes';
import { handleLogger } from '../logger';

const _app = express();

const logger = handleLogger(appConfig.appName, appConfig.envName);

const dbClient = {};

// inject repositories
const databaseRepoInstance = databaseRepository(
  dbClient,
  appConfig.car.tableName,
);

const adapterInstance = adapter(logger, databaseRepoInstance);

_app.use(express.json({ limit: '10mb' }));
_app.use(express.urlencoded({ extended: false }));

export const app = getRoutes(logger, adapterInstance, _app);

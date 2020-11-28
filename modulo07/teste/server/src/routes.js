import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserControllers';

routes.post('/users', UserController.store);
export default routes;

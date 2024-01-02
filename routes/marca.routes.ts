import { Router } from 'express';
import {
  createController,
  getController,
  updateController,
  deleteController,
  getAllController
} from '../modules/marca';

const routes = Router();
import { validateJWT } from "../middleware/auth.middleware"; 

routes.post('/marca',validateJWT, (req, res) => createController.handle(req, res));
routes.get('/marca/:id',validateJWT, (req, res) => getController.handle(req, res));
routes.put('/marca/:id',validateJWT, (req, res) => updateController.handle(req, res));
routes.delete('/marca/:id',validateJWT, (req, res) => deleteController.handle(req, res));
routes.get('/marca',validateJWT, (req, res) => getAllController.handle(req, res));

export default routes;
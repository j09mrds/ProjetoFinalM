import {
    createController,
  getController,
  updateController,
  deleteController,
  getAllController
  } from "../modules/funcionario";
  import { Router, Request, Response } from "express";
  
  import { validateJWT } from "../middleware/auth.middleware"; 
  const routes = Router();
  
  routes.post('/funcionario', async (req: Request, res: Response) => {
    createController.handle(req, res);
  });
  routes.get('/funcionario/', validateJWT, async (req: Request, res: Response) => {
    getAllController.handle(req, res);
  });
  routes.get('/funcionario/:id', validateJWT, async (req: Request, res: Response) => {
    getController.handle(req, res);
  });
  
  routes.put('/funcionario/:id', validateJWT, async (req: Request, res: Response) => {
    updateController.handle(req, res);
  });
  
  routes.delete('/funcionario/:id', validateJWT, async (req: Request, res: Response) => {
    deleteController.handle(req, res);
  });
  
  export default routes;
  import {
      createController ,
      getController ,
      updateController ,
      deleteController 
    
    } from "../modules/itemvenda";
    
    import { Router, Request, Response } from "express";
    
    import { validateJWT } from "../middleware/auth.middleware"; 
    const routes = Router();
    
    routes.post('/itemvenda',validateJWT, async (req: Request, res: Response) => {
      createController.handle(req, res);
    });
    
    
    routes.get('/itemvenda/:id', validateJWT, async (req: Request, res: Response) => {
      getController.handle(req, res);
    });
    
    routes.put('/itemvenda/:id', validateJWT, async (req: Request, res: Response) => {
      updateController.handle(req, res);
    });
    
    routes.delete('/itemvenda/:id', validateJWT, async (req: Request, res: Response) => {
      deleteController.handle(req, res);
    });
    
    export default routes;
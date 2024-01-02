
import { Router } from 'express';
import MarcaRoutes from './marca.routes';
import FuncionarioRoutes from './funcionario.routes';
const routes = Router();

routes.use(MarcaRoutes);
routes.use(FuncionarioRoutes);

export default routes;
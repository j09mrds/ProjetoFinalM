
import { Router } from 'express';
import MarcaRoutes from './marca.routes';
import FuncionarioRoutes from './funcionario.routes';
import ProdutoRoutes from './produto.routes';
import ItemVendaRoutes from './itemvenda.routes';
import VendaRoutes from './venda.routes';

const routes = Router();

routes.use(VendaRoutes);
routes.use(ItemVendaRoutes);
routes.use(ProdutoRoutes);
routes.use(MarcaRoutes);
routes.use(FuncionarioRoutes);

export default routes;
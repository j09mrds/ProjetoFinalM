import express from 'express';
import {
  createProdutoController,
  getProdutoController,
  updateProdutoController,
  deleteProdutoController,
  getAllProdutosController
} from '../modules/produto/';
import { validateJWT } from "../middleware/auth.middleware"; 

const router = express.Router();

router.post('/produtos', validateJWT, (req, res) => createProdutoController.handle(req, res));
router.get('/produtos/:id', validateJWT, (req, res) => getProdutoController.handle(req, res));
router.put('/produtos/:id', validateJWT, (req, res) => updateProdutoController.handle(req, res));
router.delete('/produtos/:id',validateJWT, (req, res) => deleteProdutoController.handle(req, res));
router.get('/produtos', validateJWT, (req, res) => getAllProdutosController.handle(req, res));

export default router;

import { Request, Response } from 'express';
import { GetAllProdutosService } from '../services/getall.produto.service';

export class GetAllProdutosController {
  constructor(private getAllProdutosService: GetAllProdutosService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try{
    const produtos = await this.getAllProdutosService.execute();
    return res.json(produtos);
  } catch (error) {
    return res.json({ error: error}); 
  }
  }
}
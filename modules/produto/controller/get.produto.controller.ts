
import { Request, Response } from 'express';
import { GetProdutoService } from '../services/get.produto.service';

export class GetProdutoController {
  constructor(private getProdutoService: GetProdutoService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try{
    const produto = await this.getProdutoService.execute(Number(req.params.id));
    return res.json(produto);
  } catch (error) {
    return res.json({ error: error}); 
  }
  }
}
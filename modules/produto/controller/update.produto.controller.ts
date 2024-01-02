
import { Request, Response } from 'express';
import { UpdateProdutoService } from '../services/update.produto.service';

export class UpdateProdutoController {
  constructor(private updateProdutoService: UpdateProdutoService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try{
    const produto = await this.updateProdutoService.execute(req.body);
    return res.json(produto);
  } catch (error) {
    return res.json({ error: error}); 
  }
  }
}
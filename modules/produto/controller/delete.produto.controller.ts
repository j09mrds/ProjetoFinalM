
import { Request, Response } from 'express';
import { DeleteProdutoService } from '../services/deleteproduto.service';

export class DeleteProdutoController {
  constructor(private deleteProdutoService: DeleteProdutoService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try{
    const produto = await this.deleteProdutoService.execute(Number(req.params.id));
    return res.json(produto);
  } catch (error) {
    return res.json({ error: error}); 
  }
  }
}

import { UpdateItemVendaService } from "../services/update.itemvenda.service";
import { Request, Response } from "express";

export class UpdateItemVendaController {
  constructor(private readonly service: UpdateItemVendaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const id = Number(request.params.id);
    const { produtoId, vendaId, quantidade, preco } = request.body;
    const itemVenda = await this.service.execute(id, produtoId, vendaId, quantidade, preco);
    return response.json(itemVenda);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
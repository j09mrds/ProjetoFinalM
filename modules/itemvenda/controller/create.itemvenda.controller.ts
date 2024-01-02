
import { CreateItemVendaService } from "../services/create.itemvenda.service";
import { Request, Response } from "express";

export class CreateItemVendaController {
  constructor(private readonly service: CreateItemVendaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const { produtoId, vendaId, quantidade, preco } = request.body;
    const itemVenda = await this.service.execute(produtoId, vendaId, quantidade, preco);
    return response.status(201).json(itemVenda);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
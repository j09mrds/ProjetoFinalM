
import { GetItemVendaService } from "../services/get.itemvenda.service";
import { Request, Response } from "express";

export class GetItemVendaController {
  constructor(private readonly service: GetItemVendaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try{

    const id = Number(request.params.id);
    const itemVenda = await this.service.execute(id);
    return response.json(itemVenda);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
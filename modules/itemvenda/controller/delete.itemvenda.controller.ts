
import { DeleteItemVendaService } from "../services/delete.itemvenda.service";
import { Request, Response } from "express";

export class DeleteItemVendaController {
  constructor(private readonly service: DeleteItemVendaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const id = Number(request.params.id);
    await this.service.execute(id);
    return response.status(204).send('Deleted');
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
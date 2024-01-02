
import { Request, Response } from "express";
import { DeleteVendaService } from "../services/delete.venda.service";

export class DeleteVendaController {
  constructor(private deleteVendaService: DeleteVendaService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const { id } = request.params;
    await this.deleteVendaService.execute(Number(id));
    return response.status(204).send('Deleted');
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
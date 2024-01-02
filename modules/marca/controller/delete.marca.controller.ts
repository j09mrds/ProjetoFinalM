import { DeleteMarca } from "../services/delete.marca.service";
import { Request, Response } from "express";

export class DeleteMarcaController {
  constructor(private readonly service: DeleteMarca) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const id: number = parseInt(request.params.id);
    await this.service.execute(id);
    return response.status(204).json(null);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}

import { UpdateMarca } from "../services/update.marca.service";
import { Request, Response } from "express";

export class UpdateMarcaController {
  constructor(private readonly service: UpdateMarca) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const id: number = parseInt(request.params.id);
    const updatedMarca = await this.service.execute(id, request.body);
    return response.json(updatedMarca);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}

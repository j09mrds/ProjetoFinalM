import { UpdateMarca } from "../services/update.marca.service";
import { Request, Response } from "express";

export class UpdateMarcaController {
  constructor(private readonly service: UpdateMarca) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const id: number = parseInt(request.params.id);
    const updatedMarca = await this.service.execute(id, request.body);
    return response.json(updatedMarca);
  }
}

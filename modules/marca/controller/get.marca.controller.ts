import { GetMarca } from "../services/get.marca.service";
import { Request, Response } from "express";

export class GetMarcaController {
  constructor(private readonly service: GetMarca) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const id: number = parseInt(request.params.id);
    const marca = await this.service.execute(id);
    return response.json(marca);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}

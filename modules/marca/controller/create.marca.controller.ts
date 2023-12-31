import { CreateMarca } from "../services/create.marca.service";
import { Request, Response } from "express";

export class CreateMarcaController {
  constructor(private readonly service: CreateMarca) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const marca = await this.service.execute(request.body);
    return response.status(201).json(marca);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}

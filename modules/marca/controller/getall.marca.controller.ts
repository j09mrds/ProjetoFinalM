import { getAllMarcas } from "../services/getall.marca.service";
import { Request, Response } from "express";

export class GetAllMarcasController {
  constructor(private readonly service: getAllMarcas) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const marcas = await this.service.execute();
    return response.json(marcas);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
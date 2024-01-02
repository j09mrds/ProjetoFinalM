import { getAllMarcas } from "../services/getall.marca.service";
import { Request, Response } from "express";

export class GetAllMarcasController {
  constructor(private readonly service: getAllMarcas) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const marcas = await this.service.execute();
    return response.json(marcas);
  }
}
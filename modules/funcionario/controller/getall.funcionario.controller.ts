import { GetAllFuncionarioService } from "../services/getall.funcionario.service";
import { Request, Response } from "express";

export class GetAllFuncionarioController {
  constructor(private readonly service: GetAllFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const funcionarios = await this.service.execute();
    return response.json(funcionarios);
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
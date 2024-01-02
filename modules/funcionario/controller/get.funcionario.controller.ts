import { GetFuncionarioService } from "../services/get.funcionario.service";
import { Request, Response } from "express";

export class GetFuncionarioController {
  constructor(private readonly service: GetFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const funcionario = await this.service.execute(id);
    return response.json(funcionario);
  }
}
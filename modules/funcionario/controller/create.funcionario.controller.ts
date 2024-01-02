import { FuncionarioDto } from "../dtos/funcionario.dto";
import { CreateFuncionarioService } from "../services/create.funcionario.service";
import { Request, Response } from "express";

export class CreateFuncionarioController {
  constructor(private readonly service: CreateFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const funcionario = <FuncionarioDto>request.body;
    await this.service.execute(funcionario);
    const result = await this.service.execute(funcionario);
    
    // Insere o token JWT no cabeçalho da resposta
    response.setHeader('Authorization', 'Bearer ' + result.token);
    return response.json({ message: "Funcionario created" });
  }
}
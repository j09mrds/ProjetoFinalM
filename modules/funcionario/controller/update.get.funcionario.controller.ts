import { FuncionarioDto } from "../dtos/funcionario.dto";
import { UpdateFuncionarioService } from "../services/update.funcionario.service";
import { Request, Response } from "express";

export class UpdateFuncionarioController {
  constructor(private readonly service: UpdateFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try{
    const id = Number(request.params.id);
    const funcionarioData = <FuncionarioDto>request.body;
    await this.service.execute(id, funcionarioData);
    return response.json({ message: "Funcionario updated" });
  } catch (error) {
    return response.json({ error: error}); 
  }
  }
}
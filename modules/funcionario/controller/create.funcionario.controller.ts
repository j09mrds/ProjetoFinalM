import { FuncionarioDto } from "../dtos/funcionario.dto";
import { CreateFuncionarioService } from "../services/create.funcionario.service";
import { Request, Response } from "express";

export class CreateFuncionarioController {
  constructor(private readonly service: CreateFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      
    
    const funcionario = <FuncionarioDto>request.body;
    await this.service.execute(funcionario);
    const result = await this.service.execute(funcionario);
    
    
    response.setHeader('Authorization', 'Bearer ' + result.token);
    return response.json({ message: "Funcionario created" });
  }
  catch (error) {
    
    return response.json(error);
  }
}
  }
import { DeleteFuncionarioService } from "../services/delete.funcionario.service";
import { Request, Response } from "express";

export class DeleteFuncionarioController {
  constructor(private readonly service: DeleteFuncionarioService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    await this.service.execute(id);
    return response.json({ message: "Funcionario deleted" });
  }
}
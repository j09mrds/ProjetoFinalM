import { FuncionarioRepository } from "../repositories/funcionario.repository";
import { FuncionarioDto } from "../dtos/funcionario.dto";

export class GetAllFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(): Promise<FuncionarioDto[]> {
    return await this.repository.getAllFuncionarios();
  }
}
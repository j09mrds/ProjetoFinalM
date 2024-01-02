import { FuncionarioDto } from "../dtos/funcionario.dto";
import { FuncionarioRepository } from "../repositories/funcionario.repository";

export class GetFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(id: number): Promise<FuncionarioDto> {
    return await this.repository.getFuncionario(id);
  }
}
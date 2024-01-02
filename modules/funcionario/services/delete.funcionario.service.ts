import { FuncionarioRepository } from "../repositories/funcionario.repository";

export class DeleteFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(id: number): Promise<void> {
    await this.repository.deleteFuncionario(id);
  }
}
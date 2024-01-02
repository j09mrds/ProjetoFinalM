import { FuncionarioDto } from "../dtos/funcionario.dto";
import { FuncionarioEntity } from "../entities/funcionario.entity";
import { FuncionarioRepository } from "../repositories/funcionario.repository";

export class GetFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(id: number): Promise<FuncionarioDto> {
    const funcionarioEntity = await this.repository.getFuncionario(id);
    return this.toDto(funcionarioEntity);
  }

  private toDto(funcionarioEntity: FuncionarioEntity): FuncionarioDto {
    return {
      id: funcionarioEntity.id!,
      nome: funcionarioEntity.nome, 
      senha: funcionarioEntity.senha, 
    };
  }
}
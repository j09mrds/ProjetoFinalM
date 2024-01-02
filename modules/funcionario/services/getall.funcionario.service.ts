import { FuncionarioDto } from "../dtos/funcionario.dto";
import { FuncionarioEntity } from "../entities/funcionario.entity";
import { FuncionarioRepository } from "../repositories/funcionario.repository";

export class GetAllFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(): Promise<FuncionarioDto[]> {
    const funcionarios = await this.repository.getAllFuncionarios();
    return funcionarios.map(this.toDto);
  }

  private toDto(funcionarioEntity: FuncionarioEntity): FuncionarioDto {
    return {
      id: funcionarioEntity.id!,
      nome: funcionarioEntity.nome, 
      senha: funcionarioEntity.senha, 
    };
  }
}
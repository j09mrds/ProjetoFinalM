import bcrypt from 'bcrypt';
import { FuncionarioRepository } from '../repositories/funcionario.repository';
import { FuncionarioDto } from '../dtos/funcionario.dto';
import { FuncionarioMapping } from '../mappings/funcionario.mapping';

export class UpdateFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(id: number, funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto> {
    
    const hashedPassword = await bcrypt.hash(funcionario.senha, 10);

    
    funcionario.senha = hashedPassword;

    const updatedFuncionarioEntity = await this.repository.updateFuncionario(id, funcionario);

    // Convert FuncionarioEntity to FuncionarioDto before returning
    const updatedFuncionarioDto: FuncionarioDto = FuncionarioMapping.toDto(updatedFuncionarioEntity);

    return updatedFuncionarioDto;
  }
}
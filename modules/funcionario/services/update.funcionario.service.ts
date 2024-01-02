import bcrypt from 'bcrypt';
import { FuncionarioRepository } from '../repositories/funcionario.repository';
import { FuncionarioDto } from '../dtos/funcionario.dto';

export class UpdateFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(id: number, funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto> {
    // Criptografa a senha antes de atualizar o funcionário
    const hashedPassword = await bcrypt.hash(funcionario.senha, 10);

    // Substitui a senha do funcionário pela senha criptografada
    funcionario.senha = hashedPassword;

    const updatedFuncionario = await this.repository.updateFuncionario(id, funcionario);

    return updatedFuncionario;
  }
}
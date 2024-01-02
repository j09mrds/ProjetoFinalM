import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { FuncionarioRepository } from '../repositories/funcionario.repository';
import { FuncionarioDto } from '../dtos/funcionario.dto';

export class CreateFuncionarioService {
  constructor(private readonly repository: FuncionarioRepository) { }

  async execute(funcionario: FuncionarioDto): Promise<{ funcionario: FuncionarioDto, token: string }> {
    // Criptografa a senha antes de salvar o funcionário
    const hashedPassword = await bcrypt.hash(funcionario.senha, 10);

    // Substitui a senha do funcionário pela senha criptografada
    funcionario.senha = hashedPassword;

    const createdFuncionario = await this.repository.createFuncionario(funcionario);

    // Gera um token JWT para o novo funcionário
    const token = jwt.sign({ id: createdFuncionario.id }, 'pgZkdPLNzm3uSgFmjgfz$x;EuM;uCP', { expiresIn: '1h' });

    return { funcionario: createdFuncionario, token };
  }
}
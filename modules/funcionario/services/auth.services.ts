// services/AuthService.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { FuncionarioRepositoryImplementation } from '../repositories/implementations/funcionario.implrepository';

export class AuthService {
  constructor(private funcionarioRepository: FuncionarioRepositoryImplementation) {}

  async login(id: number, senha: string): Promise<{ auth: boolean, token: string }> {
    const funcionario = await this.funcionarioRepository.getFuncionario(id);

    if (!funcionario || !funcionario.senha || !await bcrypt.compare(senha, funcionario.senha)) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: funcionario.id }, 'pgZkdPLNzm3uSgFmjgfz$x;EuM;uCP', {
      expiresIn: 86400, // expires in 24 hours
    });

    return { auth: true, token: token };
  }
}
import { FuncionarioDto } from '../dtos/funcionario.dto';

export interface FuncionarioRepository {
  createFuncionario(funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto>;
  getFuncionario(id: number): Promise<FuncionarioDto>;
  updateFuncionario(id: number, funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto>;
  deleteFuncionario(id: number): Promise<void>;
  getAllFuncionarios(): Promise<FuncionarioDto[]>;
}
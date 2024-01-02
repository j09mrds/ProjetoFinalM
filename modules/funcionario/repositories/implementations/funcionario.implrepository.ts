// funcionarioRepository.ts

import { PrismaClient } from "@prisma/client";
import { FuncionarioDto } from '../../dtos/funcionario.dto';
import { FuncionarioRepository } from '../funcionario.repository';

const prisma = new PrismaClient();

export class FuncionarioRepositoryImplementation implements FuncionarioRepository {
  async createFuncionario(funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto> {
    const createdFuncionario = await prisma.tbFuncionario.create({
      data: funcionario
    });
    return createdFuncionario;
  }

async getFuncionario(id: number): Promise<FuncionarioDto> {
  const funcionario = await prisma.tbFuncionario.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      senha: true, // Adicione a senha aqui se você quiser retorná-la
      tbVendas: {
        select: {
          id: true,
          funcionarioId: true,
          tbItemVenda: true // substitua tbItemVenda pelo nome correto do relacionamento em seu modelo Prisma
        }
      }
    }
  });

  if (!funcionario) throw new Error('Funcionario not found');
  return funcionario;
}

  async updateFuncionario(id: number, funcionario: Omit<FuncionarioDto, 'id'>): Promise<FuncionarioDto> {
    const updatedFuncionario = await prisma.tbFuncionario.update({
      where: { id },
      data: funcionario
    });
    return updatedFuncionario;
  }

  async deleteFuncionario(id: number): Promise<void> {
    await prisma.tbFuncionario.delete({
      where: { id }
    });
  }
  async getAllFuncionarios(): Promise<FuncionarioDto[]> {
    const funcionarios = await prisma.tbFuncionario.findMany({
      select: {
        id: true,
        nome: true,
        senha: true, // Adicione a senha aqui se você quiser retorná-la
        tbVendas: {
          select: {
            id: true,
            funcionarioId: true,
            tbItemVenda: true // substitua tbItemVenda pelo nome correto do relacionamento em seu modelo Prisma
          }
        }
      }
    });
  
    return funcionarios;
  }
}
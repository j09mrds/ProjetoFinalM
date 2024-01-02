import { PrismaClient } from "@prisma/client";
import { ProdutoDto } from "../../dtos/produto.dto";
import { ProdutoMapping } from "../../mappings/produto.mapping";
import { ProdutoEntity } from "../../entities/produto.entity";

const prisma = new PrismaClient();

export class ProdutoRepository  {
  async getAllProdutos(): Promise<ProdutoDto[]> {
    const produtos = await prisma.tbProdutos.findMany();
    return produtos.map(produto => ProdutoMapping.toDto(new ProdutoEntity(produto.id, produto.nome, produto.marcaId)));
  }

  async createProduto(dto: ProdutoDto): Promise<ProdutoDto> {
    const produtoEntity = ProdutoMapping.toEntity(dto);
    const createdProduto = await prisma.tbProdutos.create({
      data: {
        id: produtoEntity.id,
        nome: produtoEntity.nome,
        marcaId: produtoEntity.marcaId
      },
    });
    return ProdutoMapping.toDto(new ProdutoEntity(createdProduto.id, createdProduto.nome, createdProduto.marcaId));
  }

  async getProduto(id: number): Promise<ProdutoDto | null> {
    const produto = await prisma.tbProdutos.findUnique({
      where: {
        id,
      },
    });
    return produto ? ProdutoMapping.toDto(new ProdutoEntity(produto.id, produto.nome, produto.marcaId)) : null;
  }

  async updateProduto(dto: ProdutoDto): Promise<ProdutoDto | null> {
    const produtoEntity = ProdutoMapping.toEntity(dto);
    const updatedProduto = await prisma.tbProdutos.update({
      where: {
        id: produtoEntity.id,
      },
      data: {
        nome: produtoEntity.nome,
        marcaId: produtoEntity.marcaId
      },
    });
    return updatedProduto ? ProdutoMapping.toDto(new ProdutoEntity(updatedProduto.id, updatedProduto.nome, updatedProduto.marcaId)) : null;
  }

  async deleteProduto(id: number): Promise<ProdutoDto | null> {
    const deletedProduto = await prisma.tbProdutos.delete({
      where: {
        id,
      },
    });
    return deletedProduto ? ProdutoMapping.toDto(new ProdutoEntity(deletedProduto.id, deletedProduto.nome, deletedProduto.marcaId)) : null;
  }
}
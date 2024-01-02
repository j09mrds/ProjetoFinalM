import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class ProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async getAllProdutos(): Promise<ProdutoDto[]> {
    return this.produtoRepository.getAllProdutos();
  }

  async createProduto(dto: ProdutoDto): Promise<ProdutoDto> {
    return this.produtoRepository.createProduto(dto);
  }

  async getProduto(id: number): Promise<ProdutoDto | null> {
    return this.produtoRepository.getProduto(id);
  }

  async updateProduto(dto: ProdutoDto): Promise<ProdutoDto | null> {
    return this.produtoRepository.updateProduto(dto);
  }

  async deleteProduto(id: number): Promise<ProdutoDto | null> {
    return this.produtoRepository.deleteProduto(id);
  }
}

import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class GetProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(id: number): Promise<ProdutoDto | null> {
    return this.produtoRepository.getProduto(id);
  }
}
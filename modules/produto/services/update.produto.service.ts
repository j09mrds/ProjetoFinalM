
import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class UpdateProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(dto: ProdutoDto): Promise<ProdutoDto | null> {
    return this.produtoRepository.updateProduto(dto);
  }
}

import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";
export class CreateProdutoService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(dto: ProdutoDto): Promise<ProdutoDto> {
    return this.produtoRepository.createProduto(dto);
  }
}
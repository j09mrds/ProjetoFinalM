
import { ProdutoDto } from "../dtos/produto.dto";
import { ProdutoRepository } from "../repositories/produto.repository";

export class GetAllProdutosService {
  constructor(private produtoRepository: ProdutoRepository) {}

  async execute(): Promise<ProdutoDto[]> {
    return this.produtoRepository.getAllProdutos();
  }
}
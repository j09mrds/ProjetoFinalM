import { ProdutoEntity } from '../entities/produto.entity'
import { ProdutoDto } from '../dtos/produto.dto'
export class ProdutoMapping {
    static toEntity(dto: ProdutoDto | ProdutoDto): ProdutoEntity {
      const produto = new ProdutoEntity(dto.id, dto.nome, dto.marcaId);
      return produto;
    }
  
    static toDto(entity: ProdutoEntity): ProdutoDto {
      const dto = new ProdutoDto();
      dto.id = entity.id;
      dto.nome = entity.nome;
      dto.marcaId = entity.marcaId;
      return dto;
    }
  }
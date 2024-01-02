import { MarcaEntity } from "../entities/marca.entity";
import { MarcaDto } from "../dtos/marca.dtos";

export class MarcaPrismaMapping {
  static to(marca: MarcaDto): MarcaEntity {
    return {
      id: marca.id,
      nome: marca.nome,
    }
  }

  static from(marca: MarcaEntity): MarcaDto {
    return {
      id: marca.id, 
      nome: marca.nome,
    }
  }
}
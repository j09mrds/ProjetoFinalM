import { MarcaEntity } from "../entities/marca.entity";
import { tbMarca, Prisma } from "@prisma/client";

export class MarcaPrismaMapping {
  static to(marca: tbMarca): MarcaEntity {
    return {
      id: marca.id,
      nome: marca.nome,
    }
  }

  static from(marca: MarcaEntity): Prisma.tbMarcaCreateInput {
    return {
      nome: marca.nome,
    }
  }
}
import { PrismaClient, tbMarca } from "@prisma/client";
import { MarcaEntity } from "../../entities/marca.entity";
import { MarcaPrismaMapping } from "../../mappings/marca.mapping";

export class MarcaRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createMarca(marca: MarcaEntity): Promise<MarcaEntity> {
    const prismaMarca: tbMarca = await this.prisma.tbMarca.create({
      data: MarcaPrismaMapping.from(marca),
    });
    return MarcaPrismaMapping.to(prismaMarca);
  }

  async getMarca(id: number): Promise<MarcaEntity | null> {
    const prismaMarca = await this.prisma.tbMarca.findUnique({ where: { id } });
    return prismaMarca ? MarcaPrismaMapping.to(prismaMarca) : null;
  }

  async updateMarca(id: number, marca: Omit<MarcaEntity, 'id'>): Promise<MarcaEntity> {
    const prismaMarca = await this.prisma.tbMarca.update({
      where: { id },
      data: MarcaPrismaMapping.from({ id, ...marca }),
    });
    return MarcaPrismaMapping.to(prismaMarca);
  }

  async deleteMarca(id: number): Promise<void> {
    await this.prisma.tbMarca.delete({ where: { id } });
  }

  async getAllMarcas(): Promise<MarcaEntity[]> {
    const prismaMarcas = await this.prisma.tbMarca.findMany();
    return prismaMarcas.map(MarcaPrismaMapping.to);
  }
}

import { PrismaClient } from "@prisma/client";
import { ItemVendaEntity } from "../../entities/itemvenda.entity";
import { ItemVendaMapping } from "../../mappings/itemvenda.mapping";

import { IItemVendaRepository } from "../itemvenda.repository";

export class ItemVendaRepository implements IItemVendaRepository {

  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createItemVenda(itemVendaEntity: ItemVendaEntity) {
    const itemVenda = await this.prisma.tbItemVenda.create({
      data: {
        produtoId: itemVendaEntity.produtoId,
        vendaId: itemVendaEntity.vendaId,
        quantidade: itemVendaEntity.quantidade,
        preco: itemVendaEntity.preco
      }
    });
  
    return itemVenda;
  }
  async getItemVenda(id: number) {
    const itemVenda = await this.prisma.tbItemVenda.findUnique({
      where: { id }
    });
    return itemVenda ? ItemVendaMapping.toEntity(itemVenda) : null;
  }

  async updateItemVenda(itemVendaEntity: ItemVendaEntity) {
    const itemVenda = await this.prisma.tbItemVenda.update({
      where: { id: itemVendaEntity.id },
      data: ItemVendaMapping.toDto(itemVendaEntity)
    });
    return ItemVendaMapping.toEntity(itemVenda);
  }
  async deleteItemVenda(id: number): Promise<void> {
    await this.prisma.tbItemVenda.delete({
      where: { id }
    });
  }
}
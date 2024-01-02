import { PrismaClient } from "@prisma/client";
import { VendaDTO } from "../../dtos/venda.dtos";
import { Venda } from "../../entities/venda.entity";
import { VendaMapping } from "../../mappings/venda.mapping";
import { IVendaRepository } from "../venda.repository";

const prisma = new PrismaClient();

export class VendaRepository implements IVendaRepository {

  async create(vendaDTO: VendaDTO): Promise<Venda> {
    const venda = await prisma.tbVendas.create({
      data: VendaMapping.from(vendaDTO)
    });
    return VendaMapping.to(venda);
  }

  async findById(id: number): Promise<Venda | null> {
    const venda = await prisma.tbVendas.findUnique({
      where: { id }
    });
    return venda ? VendaMapping.to(venda) : null;
  }

  async update(id: number, vendaDTO: VendaDTO): Promise<Venda | null> {
    const venda = await prisma.tbVendas.update({
      where: { id },
      data: VendaMapping.from(vendaDTO)
    });
    return venda ? VendaMapping.to(venda) : null;
  }

  async delete(id: number): Promise<void> {
     await prisma.tbVendas.delete({ where: { id: id } });
    
    
}
}
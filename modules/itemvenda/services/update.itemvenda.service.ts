
import { ItemVendaEntity } from "../entities/itemvenda.entity";
import { IItemVendaRepository } from "../repositories/itemvenda.repository";

export class UpdateItemVendaService {
  constructor(private itemVendaRepository: IItemVendaRepository) {}

  async execute(id: number, produtoId: number, vendaId: number, quantidade: number, preco: number) {
    const itemVendaEntity = new ItemVendaEntity(id, produtoId, vendaId, quantidade, preco);
    return this.itemVendaRepository.updateItemVenda(itemVendaEntity);
  }
}
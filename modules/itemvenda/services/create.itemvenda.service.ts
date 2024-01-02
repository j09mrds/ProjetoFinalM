
import { ItemVendaEntity } from "../entities/itemvenda.entity";
import { IItemVendaRepository } from "../repositories/itemvenda.repository";

export class CreateItemVendaService {
  constructor(private itemVendaRepository: IItemVendaRepository) {}

  async execute(produtoId: number, vendaId: number, quantidade: number, preco: number) {
    const itemVendaEntity = new ItemVendaEntity(0, produtoId, vendaId, quantidade, preco);
    return this.itemVendaRepository.createItemVenda(itemVendaEntity);
  }
}
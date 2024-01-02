
import { IItemVendaRepository } from "../repositories/itemvenda.repository";

export class DeleteItemVendaService {
  constructor(private itemVendaRepository: IItemVendaRepository) {}

  async execute(id: number) {
    return this.itemVendaRepository.deleteItemVenda(id);
  }
}
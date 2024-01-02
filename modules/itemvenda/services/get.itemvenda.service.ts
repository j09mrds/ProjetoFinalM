
import { IItemVendaRepository } from "../repositories/itemvenda.repository";

export class GetItemVendaService {
  constructor(private itemVendaRepository: IItemVendaRepository) {}

  async execute(id: number) {
    return this.itemVendaRepository.getItemVenda(id);
  }
}
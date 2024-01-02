
import { IVendaRepository } from "../repositories/venda.repository";

export class DeleteVendaService {
  constructor(private vendaRepository: IVendaRepository) {}

  async execute(id: number): Promise<void> {
    return this.vendaRepository.delete(id);
  }
}
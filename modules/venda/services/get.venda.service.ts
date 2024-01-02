
import { Venda } from "../entities/venda.entity";
import { IVendaRepository } from "../repositories/venda.repository";

export class FindVendaService {
  constructor(private vendaRepository: IVendaRepository) {}

  async execute(id: number): Promise<Venda | null> {
    return this.vendaRepository.findById(id);
  }
}
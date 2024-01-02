
import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";
import { IVendaRepository } from "../repositories/venda.repository";

export class UpdateVendaService {
  constructor(private vendaRepository: IVendaRepository) {}

  async execute(id: number, vendaDTO: VendaDTO): Promise<Venda | null> {
    return this.vendaRepository.update(id, vendaDTO);
  }
}
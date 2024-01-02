import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";

export class VendaMapping {
  static from(vendaDTO: VendaDTO): Venda {
    return {
      id: vendaDTO.id,
      funcionarioId: vendaDTO.funcionarioId
    }
  }

  static to(venda: Venda): VendaDTO {
    return {
      id: venda.id,
      funcionarioId: venda.funcionarioId
    }
  }
}
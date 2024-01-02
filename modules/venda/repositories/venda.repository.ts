
import { VendaDTO } from "../dtos/venda.dtos";
import { Venda } from "../entities/venda.entity";

export interface IVendaRepository {
    create(vendaDTO: VendaDTO): Promise<Venda>;
    findById(id: number): Promise<Venda| null>;
    update(id: number, vendaDTO: VendaDTO): Promise<Venda | null>;
    delete(id: number): Promise<void>;
  }
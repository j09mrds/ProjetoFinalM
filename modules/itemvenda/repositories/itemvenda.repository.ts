
import { ItemVendaEntity } from "../entities/itemvenda.entity";

export interface IItemVendaRepository {
  createItemVenda(itemVendaEntity: ItemVendaEntity): Promise<ItemVendaEntity>;
  getItemVenda(id: number): Promise<ItemVendaEntity | null>;
  updateItemVenda(itemVendaEntity: ItemVendaEntity): Promise<ItemVendaEntity>;
  deleteItemVenda(id: number): Promise<void>;
}
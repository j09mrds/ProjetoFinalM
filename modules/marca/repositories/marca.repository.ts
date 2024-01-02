import { MarcaDto } from '../dtos/marca.dtos';

export interface MarcaRepository {
  createMarca(marca: Omit<MarcaDto, 'id'>): Promise<MarcaDto>;
  getMarca(id: number): Promise<MarcaDto>;
  updateMarca(id: number, marca: Omit<MarcaDto, 'id'>): Promise<MarcaDto>;
  deleteMarca(id: number): Promise<void>;
  getAllMarcas(): Promise<MarcaDto[]>;
}

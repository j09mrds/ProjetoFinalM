import { MarcaRepository } from '../repositories/marca.repository';
import { MarcaDto } from '../dtos/marca.dtos';

export class UpdateMarca {
  constructor(private readonly repository: MarcaRepository) { }

  async execute(id: number, marca: Omit<MarcaDto, 'id'>): Promise<MarcaDto> {
    return await this.repository.updateMarca(id, marca);
  }
}

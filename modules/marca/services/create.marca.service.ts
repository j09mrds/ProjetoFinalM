import { MarcaRepository } from '../repositories/marca.repository';
import { MarcaDto } from '../dtos/marca.dtos';

export class CreateMarca {
  constructor(private readonly repository: MarcaRepository) { }

  async execute(marca: Omit<MarcaDto, 'id'>): Promise<MarcaDto> {
    return await this.repository.createMarca(marca);
  }
}

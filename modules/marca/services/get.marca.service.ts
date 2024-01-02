import { MarcaRepository } from '../repositories/marca.repository';
import { MarcaDto } from '../dtos/marca.dtos';

export class GetMarca {
  constructor(private readonly repository: MarcaRepository) { }

  async execute(id: number): Promise<MarcaDto> {
    return await this.repository.getMarca(id);
  }
}

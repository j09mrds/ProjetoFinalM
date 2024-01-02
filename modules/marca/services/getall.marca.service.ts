import { MarcaRepository } from '../repositories/marca.repository';
import { MarcaDto } from '../dtos/marca.dtos';

export class getAllMarcas {
  constructor(private readonly repository: MarcaRepository) { }

  async execute(): Promise<MarcaDto[]> {
    return await this.repository.getAllMarcas();
  }
}
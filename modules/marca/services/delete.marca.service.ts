import { MarcaRepository } from '../repositories/marca.repository';

export class DeleteMarca {
  constructor(private readonly repository: MarcaRepository) { }

  async execute(id: number): Promise<void> {
    return await this.repository.deleteMarca(id);
  }
}

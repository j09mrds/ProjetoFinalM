
export class ProdutoEntity {
    id: number;
    nome: string;
    marcaId: number;
  
    constructor(id: number, nome: string, marcaId: number) {
      this.id = id;
      this.nome = nome;
      this.marcaId = marcaId;
    }
  }
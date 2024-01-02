
export class ItemVendaEntity {
    id: number;
    produtoId: number;
    vendaId: number;
    quantidade: number;
    preco: number;

    constructor(id: number, produtoId: number, vendaId: number, quantidade: number, preco: number) {
      this.id = id;
      this.produtoId = produtoId;
      this.vendaId = vendaId;
      this.quantidade = quantidade;
      this.preco = preco;
    }
}
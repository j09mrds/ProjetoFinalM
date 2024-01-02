
import { ItemVendaEntity } from '../entities/itemvenda.entity';
import { ItemVendaDto } from '../dtos/itemvenda.dto';

export class ItemVendaMapping {
    static toDto(itemVendaEntity: ItemVendaEntity): ItemVendaDto {
        return {
            id: itemVendaEntity.id,
            produtoId: itemVendaEntity.produtoId,
            vendaId: itemVendaEntity.vendaId,
            quantidade: itemVendaEntity.quantidade,
            preco: itemVendaEntity.preco
        };
    }

    static toEntity(itemVendaDto: ItemVendaDto): ItemVendaEntity {
        return new ItemVendaEntity(
            itemVendaDto.id,
            itemVendaDto.produtoId,
            itemVendaDto.vendaId,
            itemVendaDto.quantidade,
            itemVendaDto.preco
        );
    }
}
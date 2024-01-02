-- DropForeignKey
ALTER TABLE `tbitemvenda` DROP FOREIGN KEY `tbItemVenda_vendaId_fkey`;

-- AddForeignKey
ALTER TABLE `tbItemVenda` ADD CONSTRAINT `tbItemVenda_vendaId_fkey` FOREIGN KEY (`vendaId`) REFERENCES `tbVendas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

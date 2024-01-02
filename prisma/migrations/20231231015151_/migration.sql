/*
  Warnings:

  - Added the required column `preco` to the `tbItemVenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbitemvenda` ADD COLUMN `preco` DOUBLE NOT NULL;

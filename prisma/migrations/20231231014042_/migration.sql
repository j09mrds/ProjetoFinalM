/*
  Warnings:

  - Added the required column `senha` to the `tbFuncionario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbfuncionario` ADD COLUMN `senha` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `tbProdutos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbProdutos_nome_key` ON `tbProdutos`(`nome`);

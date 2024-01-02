/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `tbMarca` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbMarca_nome_key` ON `tbMarca`(`nome`);

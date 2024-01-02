-- CreateTable
CREATE TABLE `tbProdutos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `marcaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbVendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funcionarioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbItemVenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `produtoId` INTEGER NOT NULL,
    `vendaId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbMarca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbFuncionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbProdutos` ADD CONSTRAINT `tbProdutos_marcaId_fkey` FOREIGN KEY (`marcaId`) REFERENCES `tbMarca`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbVendas` ADD CONSTRAINT `tbVendas_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `tbFuncionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbItemVenda` ADD CONSTRAINT `tbItemVenda_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `tbProdutos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbItemVenda` ADD CONSTRAINT `tbItemVenda_vendaId_fkey` FOREIGN KEY (`vendaId`) REFERENCES `tbVendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `created` DATETIME(3) NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `active` BOOLEAN NULL,
    `date` DATETIME(3) NULL,
    `fingerprint` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserStorage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wishlist` JSON NULL,
    `cart` JSON NULL,
    `prefs` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

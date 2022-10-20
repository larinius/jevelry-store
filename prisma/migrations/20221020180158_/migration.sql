/*
  Warnings:

  - Made the column `lastActive` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `created` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `lastActive` DATETIME(3) NOT NULL;

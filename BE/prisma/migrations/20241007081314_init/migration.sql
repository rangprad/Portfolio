/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `project` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `project` DROP COLUMN `updatedAt`,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;

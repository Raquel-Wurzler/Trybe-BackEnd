"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleFile_1 = require("./HandleFile");
class PlantModel {
    constructor() {
        this.fileTypePlant = 'plants';
        this.fileTypeOpsInfo = 'opsInfo';
        this.handleFile = new HandleFile_1.HandleFile();
    }
    async updateOpsInfo(incrementAmount = 1) {
        const opsInfo = await this.handleFile.readFile(this.fileTypeOpsInfo);
        opsInfo.createdPlants += incrementAmount;
        await this.handleFile.saveFile(this.fileTypeOpsInfo, opsInfo);
        return opsInfo.createdPlants;
    }
    async getAll() {
        const plants = await this.handleFile.readFile(this.fileTypePlant);
        return plants;
    }
    async create(plant) {
        const plants = await this.getAll();
        const newPlantId = await this.updateOpsInfo(1);
        const newPlant = { id: newPlantId, ...plant };
        plants.push(newPlant);
        await this.handleFile.saveFile(this.fileTypePlant, plants);
        return newPlant;
    }
    async getById(id) {
        const plants = await this.getAll();
        const plantById = plants.find((plant) => plant.id === parseInt(id, 10));
        if (!plantById)
            return null;
        return plantById;
    }
    async update(plant) {
        const plants = await this.getAll();
        const updatedPlants = plants.map((editPlant) => {
            if (plant.id === editPlant.id)
                return { ...plant };
            return editPlant;
        });
        await this.handleFile.saveFile(this.fileTypePlant, updatedPlants);
        return plant;
    }
    async removeById(id) {
        const plants = await this.getAll();
        const removedPlant = plants.find((plant) => plant.id === parseInt(id, 10));
        if (!removedPlant)
            return false;
        const newPlants = plants.filter((plant) => plant.id !== parseInt(id, 10));
        this.handleFile.saveFile(this.fileTypePlant, newPlants);
        return true;
    }
}
exports.default = PlantModel;

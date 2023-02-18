"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hideout = void 0;
class Hideout {
    constructor(logger, databaseServer, hideoutConfig) {
        this.modConfig = require("../config/hideout.json");
        this.logger = logger;
        this.tables = databaseServer;
        this.hideoutConfig = hideoutConfig;
    }
    updateHideout() {
        const mod = this.modConfig;
        if (mod.constructionTime != 1) {
            this.updateConstructionTime();
            this.logger.info(`Construction Time Patched to ${mod.constructionTime} `);
        }
        if (mod.productionTime != 1) {
            this.updateProductionTime();
            this.logger.info(`Production Time Patched to ${mod.productionTime} `);
        }
        if (mod.scavCaseTime != 1) {
            this.updateScavCase();
            this.logger.info(`Scav Case Time Patched to ${mod.scavCaseTime}`);
        }
    }
    updateConstructionTime() {
        const hideout = this.tables.getTables().hideout.areas;
        for (const area of hideout) {
            for (const stage in area.stages) {
                const stageData = area.stages[stage];
                stageData.constructionTime *= this.modConfig.constructionTime;
            }
        }
    }
    updateProductionTime() {
        for (const production of this.tables.getTables().hideout.production) {
            production.productionTime *= this.modConfig.productionTime;
        }
    }
    updateScavCase() {
        for (const scavCase of this.tables.getTables().hideout.scavcase) {
            scavCase.ProductionTime *= this.modConfig.scavCaseTime;
        }
    }
}
exports.Hideout = Hideout;

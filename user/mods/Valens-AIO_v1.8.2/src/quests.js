"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quests = void 0;
class Quests {
    constructor(logger, databaseServer) {
        this.modConfig = require("../config/quests.json");
        this.logger = logger;
        this.tables = databaseServer;
    }
    updateQuests() {
        if (!this.modConfig.onlyFoundInRaid) {
            this.onlyFoundInRaid();
            this.logger.info("Quest Items No Longer Need Be Found In Raid");
        }
    }
    // Updates the weight modifier (as a multiplier) for all items in database/templates/items.json
    onlyFoundInRaid() {
        const quests = this.tables.getTables().templates.quests;
        Object.values(quests).forEach(quest => {
            quest.conditions.AvailableForFinish.forEach((prop, index) => {
                if (prop._parent == "FindItem" || prop._parent == "HandoverItem") {
                    prop._props.onlyFoundInRaid = false;
                    quest.conditions.AvailableForFinish[index] = prop;
                }
            });
        });
    }
}
exports.Quests = Quests;

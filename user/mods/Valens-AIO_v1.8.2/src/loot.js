"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loot = void 0;
class Loot {
    constructor(logger, databaseServer, locationConfig) {
        this.modConfig = require("../config/loot.json");
        this.logger = logger;
        this.locationConfig = locationConfig;
        this.tables = databaseServer;
    }
    updateLoot() {
        const mod = this.modConfig;
        if (mod.looseLootMultiplier != 1) {
            for (const map in this.locationConfig.looseLootMultiplier) {
                this.locationConfig.looseLootMultiplier[map] = mod.looseLootMultiplier;
            }
            this.logger.info(`Loose Loot Multiplier: ${mod.looseLootMultiplier}`);
        }
        if (mod.staticLootMultiplier != 1) {
            for (const map in this.locationConfig.staticLootMultiplier) {
                this.locationConfig.staticLootMultiplier[map] = mod.staticLootMultiplier;
            }
            this.logger.info(`Static Loot Multiplier: ${mod.staticLootMultiplier}`);
        }
        if (mod.containersInMarkedRoom) {
            this.containersInMarkedRoom();
            this.logger.info(`Containers In Marked Room: ${mod.containersInMarkedRoom}`);
        }
    }
    /**
     * Changes the loot database/tables to include containers in marked rooms.
     *
     * @variable containersInMarkedRoom Enables common containers (items case, weapon case, etc.) in Marked Rooms.
     */
    containersInMarkedRoom() {
        // Customs Marked Room Loot.
        let spawnPoints = this.tables.getTables().locations.bigmap.looseLoot.spawnpoints;
        const customsMarked1 = spawnPoints.find(x => x.template.Id === "Loot 135 (10)1137996");
        const customsMarked2 = spawnPoints.find(x => x.template.Id === "Loot 135 (9)1132486");
        const customsMarked3 = spawnPoints.find(x => x.template.Id === "Loot 135 (8)1141962");
        // Pushing containers into the customs marked room loot pool.
        customsMarked1.itemDistribution.push(...this.containers());
        customsMarked2.itemDistribution.push(...this.containers());
        customsMarked3.itemDistribution.push(...this.containers());
        // Reserve Marked Room Loot.
        spawnPoints = this.tables.getTables().locations.rezervbase.looseLoot.spawnpoints;
        const rsrvRBBK1 = spawnPoints.find(x => x.template.Id === "Loot 135 (10)51646628");
        const rsrvRBBK2 = spawnPoints.find(x => x.template.Id === "Loot 135 (8)51666758");
        const rsrvRBBK3 = spawnPoints.find(x => x.template.Id === "Loot 135 (9)51636512");
        const rsrvRBPKPM1 = spawnPoints.find(x => x.template.Id === "cult_Loot 135 (11)51654030");
        const rsrvRBPKPM2 = spawnPoints.find(x => x.template.Id === "cult_Loot 135 (12)51653462");
        const rsrvRBVO1 = spawnPoints.find(x => x.template.Id === "Loot 135 (10)51658080");
        const rsrvRBVO2 = spawnPoints.find(x => x.template.Id === "Loot 135 (11)51652762");
        const rsrvRBVO3 = spawnPoints.find(x => x.template.Id === "Loot 135 (12)51652706");
        // Pushing containers into the reserve base marked room loot pool.
        rsrvRBBK1.itemDistribution.push(...this.containers());
        rsrvRBBK2.itemDistribution.push(...this.containers());
        rsrvRBBK3.itemDistribution.push(...this.containers());
        rsrvRBPKPM1.itemDistribution.push(...this.containers());
        rsrvRBPKPM2.itemDistribution.push(...this.containers());
        rsrvRBVO1.itemDistribution.push(...this.containers());
        rsrvRBVO2.itemDistribution.push(...this.containers());
        rsrvRBVO3.itemDistribution.push(...this.containers());
        // Streets Marked Room Loot.
        spawnPoints = this.tables.getTables().locations.tarkovstreets.looseLoot.spawnpoints;
        const streets = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare3328366");
        const streets1 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (1)3332226");
        const streets2 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (2)3322128");
        const streets3 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (3)3810498");
        const streets4 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (4)3951260");
        const streets5 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (5)3325368");
        const streets6 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (6)3814146");
        const streets6a = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (6)3955044");
        const streets7 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (7)3811846");
        const streets8 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (8)3803698");
        const streets9 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (9)3826302");
        const streets10 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (10)5484984");
        const streets11 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (11)3332946");
        const streets12 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (12)3804226");
        const streets13 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (13)3967988");
        const streets14 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (14)3809678");
        const streets15 = spawnPoints.find(x => x.template.Id === "Loot 135_Leo_Rare (15)3947696");
        // Pushing containers into the streets marked room loot pool.
        streets.itemDistribution.push(...this.containers());
        streets1.itemDistribution.push(...this.containers());
        streets2.itemDistribution.push(...this.containers());
        streets3.itemDistribution.push(...this.containers());
        streets4.itemDistribution.push(...this.containers());
        streets5.itemDistribution.push(...this.containers());
        streets6.itemDistribution.push(...this.containers());
        streets6a.itemDistribution.push(...this.containers());
        streets7.itemDistribution.push(...this.containers());
        streets8.itemDistribution.push(...this.containers());
        streets9.itemDistribution.push(...this.containers());
        streets10.itemDistribution.push(...this.containers());
        streets11.itemDistribution.push(...this.containers());
        streets12.itemDistribution.push(...this.containers());
        streets13.itemDistribution.push(...this.containers());
        streets14.itemDistribution.push(...this.containers());
        streets15.itemDistribution.push(...this.containers());
    }
    containers() {
        /* Container  "id"s
        * S I C C pouch: 5d235bb686f77443f4331278
        * Magazine Case: 5c127c4486f7745625356c13
        * Weapon Case: 59fb023c86f7746d0d4b423c
        * T H I C C Weapon Case: 5b6d9ce188a4501afc1b2b25
        * Item Case: 59fb042886f7746c5005a7b2
        * T H I C C Item Case: 5c0a840b86f7742ffa4f2482
        * Money case: 59fb016586f7746d0d4b423a
        * Mr Holodilnick Thermal Bag: 5c093db286f7740a1b2617e3
        * Medicine case: 5aafbcd986f7745e590fff23
        * Lucky scav junkbox: 5b7c710788a4506dec015957
        * Grenade case: 5e2af55f86f7746d4159f07c
        * Secure container Gamma: 5857a8bc2459772bad15db29
        * Secure container Beta: 5857a8b324597729ab0a0e7d
        * Secure container Alpha: 544a11ac4bdc2d470e8b456a
        * Secure container Epsilon: 59db794186f77448bc595262
        * Secure container Kappa: 5c093ca986f7740a1867ab12
        */
        const lootItems = [];
        lootItems.push({ "tpl": "5d235bb686f77443f4331278", "relativeProbability": 12 });
        lootItems.push({ "tpl": "5c127c4486f7745625356c13", "relativeProbability": 25 });
        lootItems.push({ "tpl": "59fb023c86f7746d0d4b423c", "relativeProbability": 13 });
        lootItems.push({ "tpl": "5b6d9ce188a4501afc1b2b25", "relativeProbability": 10 });
        lootItems.push({ "tpl": "59fb042886f7746c5005a7b2", "relativeProbability": 13 });
        lootItems.push({ "tpl": "5c0a840b86f7742ffa4f2482", "relativeProbability": 10 });
        lootItems.push({ "tpl": "59fb016586f7746d0d4b423a", "relativeProbability": 25 });
        lootItems.push({ "tpl": "5c093db286f7740a1b2617e3", "relativeProbability": 30 });
        lootItems.push({ "tpl": "5aafbcd986f7745e590fff23", "relativeProbability": 30 });
        lootItems.push({ "tpl": "5b7c710788a4506dec015957", "relativeProbability": 15 });
        lootItems.push({ "tpl": "5e2af55f86f7746d4159f07c", "relativeProbability": 23 });
        lootItems.push({ "tpl": "5857a8bc2459772bad15db29", "relativeProbability": 3 });
        lootItems.push({ "tpl": "5857a8b324597729ab0a0e7d", "relativeProbability": 3 });
        lootItems.push({ "tpl": "544a11ac4bdc2d470e8b456a", "relativeProbability": 3 });
        lootItems.push({ "tpl": "59db794186f77448bc595262", "relativeProbability": 3 });
        lootItems.push({ "tpl": "5c093ca986f7740a1867ab12", "relativeProbability": 1 });
        return lootItems;
    }
}
exports.Loot = Loot;

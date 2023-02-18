"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const BaseClasses_1 = require("C:/snapshot/project/obj/models/enums/BaseClasses");
class Items {
    constructor(logger, databaseServer) {
        this.modConfig = require("../config/items.json");
        this.logger = logger;
        this.tables = databaseServer;
    }
    updateItems() {
        this.items = this.tables.getTables().templates.items;
        if (this.modConfig.removeKeyUsageMax) {
            this.removeKeyUsageMax();
            this.logger.info("Key Usage Limit Removed");
        }
        // Weight Modifier. Multiplier of Weight *= modConfig.weightModifier
        if (this.modConfig.weightModifier != 1) {
            this.newWeightModifier();
            this.logger.info(`Weight Multipler patched to ${this.modConfig.weightModifier}`);
        }
        // Removes Backpacks Restrictions.
        if (this.modConfig.removeBackpacksRestrictions) {
            this.removeBackpacksRestrictions();
            this.logger.info("Removed Backpacks Restrictions");
        }
        // Remove Secured Containers Restrictions.
        if (this.modConfig.removeSecureContainersRestrictions) {
            this.removeSecureContainersRestrictions();
            this.logger.info("Removed Secured Containers Restrictions");
        }
        // Remove Common Containers Restricitons.
        if (this.modConfig.removeContainersRestrictions) {
            this.removeContainersRestrictions();
            this.logger.info("Removed Container Restrictions");
        }
        // Remove In Raid Item Restrictions.
        if (this.modConfig.removeInRaidItemRestrictions) {
            this.removeInRaidItemRestrictions();
            this.logger.info("Removed In Raid Item Restrictions");
        }
        // Standard Stash Size Changes
        if (this.modConfig.standardStash.vertical != 28 || this.modConfig.standardStash.horizontal != 10) {
            this.updateStandardStash();
            this.logger.info(`Standard Stash Vertical changed to ${this.modConfig.standardStash.vertical}`);
            this.logger.info(`Standard Stash Horizontal changed to ${this.modConfig.standardStash.horizontal}`);
        }
        // Left Behind Stash Size Changes
        if (this.modConfig.behindStash.vertical != 38 || this.modConfig.behindStash.horizontal != 10) {
            this.updateLeftBehindStash();
            this.logger.info(`Left Behind Stash Vertical changed to ${this.modConfig.behindStash.vertical}`);
            this.logger.info(`Left Behind Stash Horizontal changed to ${this.modConfig.behindStash.horizontal}`);
        }
        // Prepare for Escape Stash Size Changes
        if (this.modConfig.escapeStash.vertical != 48 || this.modConfig.escapeStash.horizontal != 10) {
            this.updateEscapeStash();
            this.logger.info(`Prepare for Escape Stash Vertical changed to ${this.modConfig.escapeStash.vertical}`);
            this.logger.info(`Prepare for Escape Stash Horizontal changed to ${this.modConfig.escapeStash.horizontal}`);
        }
        // Edge of Darkness Stash Size Changes
        if (this.modConfig.eodStash.vertical != 68 || this.modConfig.eodStash.horizontal != 10) {
            this.updateEodStash();
            this.logger.info(`Edge of Darkness Stash Vertical changed to ${this.modConfig.eodStash.vertical}`);
            this.logger.info(`Edge of Darkness Stash Horizontal changed to ${this.modConfig.eodStash.horizontal}`);
        }
        // Toggles true/false the Examined By Default config on all items in database/templates/items.json
        if (this.modConfig.examinedByDefault) {
            this.examinedByDefault();
            this.logger.info(`Examined By Default is ${this.modConfig.examinedByDefault}`);
        }
        // Roubles Max Stack
        if (this.modConfig.roublesMaxStack != 500000) {
            this.items["5449016a4bdc2d6f028b456f"]._props.StackMaxSize = this.modConfig.roublesMaxStack;
            this.logger.info(`Rouble Max Stack set to ${this.modConfig.roublesMaxStack}`, true);
        }
        // Dollars Max Stack
        if (this.modConfig.dollarsMaxStack != 50000) {
            this.items["5696686a4bdc2da3298b456a"]._props.StackMaxSize = this.modConfig.dollarsMaxStack;
            this.logger.info(`Dollar Max Stack set to ${this.modConfig.dollarsMaxStack}`, true);
        }
        // Euros Max Stack
        if (this.modConfig.eurosMaxStack != 50000) {
            this.items["569668774bdc2da2298b4568"]._props.StackMaxSize = this.modConfig.eurosMaxStack;
            this.logger.info(`Euro Max Stack set to ${this.modConfig.eurosMaxStack}`, true);
        }
        // Remove the Discard Limit from in raid restrictions.
        if (this.modConfig.removeDiscardLimit) {
            this.removeDiscardLimit();
            this.logger.info("Removed Discard Limit");
        }
        if (this.modConfig.examineTime.enabled) {
            this.changeExamineTime();
        }
    }
    // Functions Functions.
    // Updates the weight modifier (as a multiplier) for all items in database/templates/items.json
    newWeightModifier() {
        for (const item in this.items) {
            if (this.items[item]._props?.Weight) {
                this.items[item]._props.Weight *= this.modConfig.weightModifier;
            }
        }
    }
    // Updates backpacks and removes any values in the ExcludedFilter under props > Grids > props > filters > ExcludedFilter in database/templates/items.json
    removeBackpacksRestrictions() {
        for (const id in this.items) {
            const base = this.items[id];
            const mod = this.modConfig;
            if (mod.removeBackpacksRestrictions && base._parent === BaseClasses_1.BaseClasses.BACKPACK && base._props.Grids[0]._props.filters.length > 0) {
                base._props.Grids[0]._props.filters = [];
            }
        }
    }
    removeContainersRestrictions() {
        for (const id in this.items) {
            const base = this.items[id];
            const mod = this.modConfig;
            if (mod.removeContainersRestrictions && base._parent === BaseClasses_1.BaseClasses.SIMPLE_CONTAINER && base._props.Grids[0]._props.filters.length > 0) {
                base._props.Grids[0]._props.filters = [];
            }
        }
    }
    removeSecureContainersRestrictions() {
        for (const id in this.items) {
            const base = this.items[id];
            const mod = this.modConfig;
            if (mod.removeSecureContainersRestrictions && base._parent === BaseClasses_1.BaseClasses.MOD_CONTAINER && base._props.Grids[0]._props.filters.length > 0) {
                base._props.Grids[0]._props.filters = [];
            }
        }
    }
    updateStandardStash() {
        this.items["566abbc34bdc2d92178b4576"]._props.Grids[0]._props.cellsV = this.modConfig.standardStash.vertical;
        this.items["566abbc34bdc2d92178b4576"]._props.Grids[0]._props.cellsH = this.modConfig.standardStash.horizontal;
    }
    updateLeftBehindStash() {
        this.items["5811ce572459770cba1a34ea"]._props.Grids[0]._props.cellsV = this.modConfig.behindStash.vertical;
        this.items["5811ce572459770cba1a34ea"]._props.Grids[0]._props.cellsH = this.modConfig.behindStash.horizontal;
    }
    updateEscapeStash() {
        this.items["5811ce662459770f6f490f32"]._props.Grids[0]._props.cellsV = this.modConfig.escapeStash.vertical;
        this.items["5811ce662459770f6f490f32"]._props.Grids[0]._props.cellsH = this.modConfig.escapeStash.horizontal;
    }
    updateEodStash() {
        this.items["5811ce772459770e9e5f9532"]._props.Grids[0]._props.cellsV = this.modConfig.eodStash.vertical;
        this.items["5811ce772459770e9e5f9532"]._props.Grids[0]._props.cellsH = this.modConfig.eodStash.horizontal;
    }
    // Updates the Examined By Default modifier for all items in database/templates/items.json to either True or False depending on the config value.
    examinedByDefault() {
        for (const item in this.items) {
            this.items[item]._props.ExaminedByDefault = this.modConfig.examinedByDefault;
        }
    }
    removeKeyUsageMax() {
        for (const item in this.items) {
            if (this.items[item]._parent === "5c99f98d86f7745c314214b3") {
                this.items[item]._props.MaximumNumberOfUsage = 0;
            }
        }
    }
    removeDiscardLimit() {
        for (const itemId in this.items) {
            if (this.items[itemId]._type === "Node" || !this.items[itemId]._props?.DiscardLimit) {
                continue;
            }
            this.items[itemId]._props.DiscardLimit = -1;
        }
    }
    changeExamineTime() {
        const mod = this.modConfig;
        for (const item in this.items) {
            this.items[item]._props.ExamineTime = mod.examineTime.examineTime;
        }
    }
    removeInRaidItemRestrictions() {
        this.tables.getTables().globals.config.RestrictionsInRaid = [];
    }
}
exports.Items = Items;

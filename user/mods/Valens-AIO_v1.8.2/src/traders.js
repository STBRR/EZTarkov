"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Traders = void 0;
class Traders {
    constructor(logger, databaseServer, traderConfig) {
        this.modConfig = require("../config/traders.json");
        this.logger = logger;
        this.databaseServer = databaseServer;
        this.traderConfig = traderConfig;
    }
    updateTraders() {
        const mod = this.modConfig;
        const trader = this.traderConfig;
        if (mod.updateTime.enabled) {
            this.updateTime();
        }
        if (trader.updateTimeDefault != mod.updateTimeDefault) {
            trader.updateTimeDefault = mod.updateTimeDefault;
        }
        if (trader.traderPriceMultipler != mod.traderPriceMultipler) {
            this.traderPriceMultiplier();
        }
        if (trader.durabilityPurchaseThreshhold != mod.durabilityPurchaseThreshhold) {
            this.minDurabilityForSale();
        }
        if (trader.persistPurchaseDataInProfile != mod.persistPurchaseDataInProfile) {
            trader.persistPurchaseDataInProfile = mod.persistPurchaseDataInProfile;
        }
        if (trader.fence != mod.fence) {
            this.updateFence();
        }
    }
    updateTime() {
        const mod = this.modConfig;
        const trader = this.traderConfig;
        trader.updateTime = mod.updateTime.updateTime;
        this.logger.info("Update Time Patched");
    }
    traderPriceMultiplier() {
        const mod = this.modConfig;
        const trader = this.traderConfig;
        trader.traderPriceMultipler = mod.traderPriceMultipler;
        this.logger.info(`Trader Price Multiplier Set to ${mod.traderPriceMultipler}`);
    }
    minDurabilityForSale() {
        const mod = this.modConfig;
        const trader = this.traderConfig;
        trader.durabilityPurchaseThreshhold = mod.durabilityPurchaseThreshhold;
        this.logger.info(`Min Durability For Sale Set to ${mod.durabilityPurchaseThreshhold}`);
    }
    updateFence() {
        const mod = this.modConfig.fence;
        const trader = this.traderConfig.fence;
        // Start updating Fence config.
        trader.partialRefreshTimeSeconds = mod.partialRefreshTimeSeconds;
        trader.partialRefreshChangePercent = mod.partialRefreshChangePercent;
        trader.discountOptions.assortSize = mod.assortSize;
        trader.maxPresetsPercent = mod.maxPresetsPercent;
        trader.discountOptions.itemPriceMult = mod.itemPriceMult;
        trader.discountOptions.presetPriceMult = mod.presetPriceMult;
        trader.regenerateAssortsOnRefresh = mod.regenerateAssortsOnRefresh;
        trader.itemTypeLimits = mod.itemTypeLimits;
        trader.presetMaxDurabilityPercentMinMax = mod.presetMaxDurabilityPercentMinMax;
        trader.armorMaxDurabilityPercentMinMax = mod.armorMaxDurabilityPercentMinMax;
        trader.blacklist = mod.blacklist;
        this.logger.info("Fence Has Been Patched");
    }
}
exports.Traders = Traders;

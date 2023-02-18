"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(logger) {
        this.modConfig = require("../config/config.json");
        this.logger = logger;
    }
    info(text, forced = false) {
        if (this.modConfig.DebugMode || forced) {
            this.logger.info(text);
        }
    }
}
exports.Logger = Logger;

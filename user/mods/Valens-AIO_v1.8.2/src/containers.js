"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Containers = void 0;
const ContainerTypes_1 = require("C:/snapshot/project/obj/models/enums/ContainerTypes");
class Containers {
    constructor(logger, databaseServer) {
        this.modConfig = require("../config/containers.json");
        this.logger = logger;
        this.tables = databaseServer;
    }
    updateContainers() {
        const mod = this.modConfig;
        if (mod.commonContainers.enabled) {
            this.updatingCommonContainers();
            this.logger.info("Common Containers Patched");
        }
        if (mod.securedContainers.enabled) {
            this.updatingSecuredContainers();
            this.logger.info("Secured Containers Patched");
        }
    }
    updatingCommonContainers() {
        const items = this.tables.getTables().templates.items;
        const mod = this.modConfig.commonContainers;
        for (const [key, value] of Object.entries(ContainerTypes_1.CommonContainers)) {
            items[value]._props.Grids[0]._props.cellsH = mod[key].cellsH;
            items[value]._props.Grids[0]._props.cellsV = mod[key].cellsV;
            items[value]._props.Width = mod[key].width;
            items[value]._props.Height = mod[key].height;
        }
    }
    updatingSecuredContainers() {
        const items = this.tables.getTables().templates.items;
        const mod = this.modConfig.securedContainers;
        for (const [key, value] of Object.entries(ContainerTypes_1.SecuredContainers)) {
            items[value]._props.Grids[0]._props.cellsH = mod[key].cellsH;
            items[value]._props.Grids[0]._props.cellsV = mod[key].cellsV;
            items[value]._props.Width = mod[key].width;
            items[value]._props.Height = mod[key].height;
        }
    }
}
exports.Containers = Containers;

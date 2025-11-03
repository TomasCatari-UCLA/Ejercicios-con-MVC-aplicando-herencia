"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cl_mFigura {
    constructor(coordX, coordY) {
        this._coordX = 0;
        this._coordY = 0;
        this.coordX = coordX;
        this.coordY = coordY;
    }
    set coordX(coordX) {
        this._coordX = coordX;
    }
    get coordX() {
        return this._coordX;
    }
    set coordY(coordY) {
        this._coordY = coordY;
    }
    get coordY() {
        return this._coordY;
    }
}
exports.default = Cl_mFigura;

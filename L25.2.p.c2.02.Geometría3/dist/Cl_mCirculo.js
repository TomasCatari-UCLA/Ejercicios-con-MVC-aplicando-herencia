"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cl_mFigura_js_1 = __importDefault(require("./Cl_mFigura.js"));
class Cl_mCirculo extends Cl_mFigura_js_1.default {
    constructor(coordX, coordY, radio) {
        super(coordX, coordY);
        this._radio = 0;
        this.radio = radio;
    }
    get radio() {
        return this._radio;
    }
    set radio(radio) {
        this._radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
    perimetro() {
        return 2 * Math.PI * this.radio;
    }
}
exports.default = Cl_mCirculo;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cl_mFigura_js_1 = __importDefault(require("./Cl_mFigura.js"));
class Cl_mCuadrado extends Cl_mFigura_js_1.default {
    constructor(coordX, coordY, lado) {
        super(coordX, coordY);
        this._lado = 0;
        this.lado = lado;
    }
    get lado() {
        return this._lado;
    }
    set lado(lado) {
        this._lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
}
exports.default = Cl_mCuadrado;

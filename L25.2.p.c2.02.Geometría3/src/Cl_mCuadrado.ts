import Cl_mFigura from "./Cl_mFigura.js";

export default class Cl_mCuadrado extends Cl_mFigura {
  public _lado: number = 0;
  constructor(coordX: number, coordY: number, lado: number) {
    super(coordX, coordY);
    this.lado = lado;
  }

  get lado(): number {
    return this._lado;
  }
  set lado(lado: number) {
    this._lado = +lado;
  }
  area(): number {
    return this.lado * this.lado;
  }
  perimetro(): number {
    return 4 * this.lado;
  }
}

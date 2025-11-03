import Cl_mFigura from "./Cl_mFigura.js";

export default class Cl_mCirculo extends Cl_mFigura {
  private _radio: number = 0;
  constructor(coordX: number, coordY: number, radio: number) {
    super(coordX, coordY);
    this.radio = radio;
  }
  get radio(): number {
    return this._radio;
  }
  set radio(radio: number) {
    this._radio = radio;
  }
  area(): number {
    return Math.PI * this.radio * this.radio;
  }
  perimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

export default class Cl_mFigura {
  public _coordX: number = 0;
  public _coordY: number = 0;
  constructor(coordX: number, coordY: number) {
    this.coordX = coordX;
    this.coordY = coordY;
  }
  set coordX(coordX: number) {
    this._coordX = +coordX;
  }
  get coordX(): number {
    return this._coordX;
  }
  set coordY(coordY: number) {
    this._coordY = +coordY;
  }
  get coordY(): number {
    return this._coordY;
  }
}

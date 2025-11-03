import Cl_mFigura from "./Cl_mFigura.js";

export default class Cl_mCuadrado extends Cl_mFigura {
  private _lado: number = 0;

  constructor({
    codigo,
    coordX,
    coordY,
    lado,
  }: {
    codigo: string;
    coordX: number;
    coordY: number;
    lado: number;
  }) {
    // Llama al constructor de la clase padre (Cl_mFigura)
    super({ codigo, coordX, coordY });
    this.lado = lado;
  }

  set lado(lado: number) {
    this._lado = +lado;
  }
  get lado(): number {
    return this._lado;
  }

  // Sobrescritura de los métodos con la lógica del cuadrado
  area(): number {
    return this.lado * this.lado;
  }

  perimetro(): number {
    return 4 * this.lado;
  }

  // Amplía el método toJSON del padre para incluir la propiedad 'lado'
  toJSON() {
    return {
      ...super.toJSON(),
      lado: this.lado,
      tipo: "Cuadrado",
    };
  }
}
import Cl_mFigura from "./Cl_mFigura.js";

export default class Cl_mCirculo extends Cl_mFigura {
  private _radio: number = 0;

  constructor({
    codigo,
    coordX,
    coordY,
    radio,
  }: {
    codigo: string;
    coordX: number;
    coordY: number;
    radio: number;
  }) {
    // Llama al constructor de la clase padre (Cl_mFigura)
    super({ codigo, coordX, coordY });
    this.radio = radio;
  }

  set radio(radio: number) {
    this._radio = +radio;
  }
  get radio(): number {
    return this._radio;
  }

  // Sobrescritura de los métodos con la lógica del círculo
  area(): number {
    return Math.PI * this.radio * this.radio;
  }

  perimetro(): number {
    return 2 * Math.PI * this.radio;
  }

  // Amplía el método toJSON del padre para incluir la propiedad 'radio'
  toJSON() {
    return {
      ...super.toJSON(),
      radio: this.radio,
      tipo: "Círculo",
    };
  }
}
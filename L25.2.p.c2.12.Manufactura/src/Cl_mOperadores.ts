import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mOperadores extends Cl_mEmpleado {
  private _horaExtra: number = 0;
  constructor({
    id,
    nombre,
    sueldoBase,
    horaExtra = 0,
  }: {
    id: number;
    nombre: string;
    sueldoBase: number;
    horaExtra: number;
  }) {
    super({ id, nombre,  sueldoBase });
    this.horaExtra = horaExtra;
  }
  set horaExtra(horaExtra: number) {
    this._horaExtra = +horaExtra;
  }
  get horaExtra(): number {
    return this._horaExtra;
  }
  prima(): number {
    return this.horaExtra * 5;
  }

  sueldoMensual(): number {
    return this.prima() + this.sueldoBase
  }
  toJSON() {
    return {
      ...super.toJSON(),
      horaExtra: this.horaExtra,
    };
  }
}

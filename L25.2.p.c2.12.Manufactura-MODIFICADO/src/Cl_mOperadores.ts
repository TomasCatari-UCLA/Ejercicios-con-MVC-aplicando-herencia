import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mOperadores extends Cl_mEmpleado {
  private _horaExtra: number = 0;
  constructor({
    id,
    nombre,
    sueldoBase,
    antiguedad,
    horaExtra = 0,
  }: {
    id: number;
    nombre: string;
    sueldoBase: number;
    antiguedad:number;
    horaExtra: number;
  }) {
    super({ id, nombre,  sueldoBase,antiguedad });
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
    return this.prima() + this.sueldoBase + this.bonoAntiguedad();
  }
  bonoAntiguedad(): number {
    if(this.horaExtra>30){ 
      return 2*(10*this.antiguedad);}
   else return 10*this.antiguedad;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      horaExtra: this.horaExtra,
    };
  }
}

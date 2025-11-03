export default class Cl_mPrestamo {
  public _cedula: string = "";
  public _estadoCivil: string = "";
  public _montoPrestamo: number = 0;
  constructor({
    cedula,
    estadoCivil,
    montoPrestamo,
  }: {
    cedula: string;
    estadoCivil: string;
    montoPrestamo: number;
  }) {
    this.cedula = cedula;
    this.estadoCivil = estadoCivil;
    this.montoPrestamo = montoPrestamo;
  }
  set cedula(cedula: string) {
    this._cedula = cedula;
  }
  get cedula(): string {
    return this._cedula;
  }
  set estadoCivil(estadoCivil: string) {
    this._estadoCivil = estadoCivil;
  }
  get estadoCivil(): string {
    return this._estadoCivil;
  }
  set montoPrestamo(montoPrestamo: number) {
    this._montoPrestamo = +montoPrestamo;
  }
  get montoPrestamo(): number {
    return this._montoPrestamo;
  }
 
 montoFinalP(): number {
    return 0;
  }
  intereses(): number {
    return 0;
  }
  toJSON() {
    return {
      cedula: this.cedula,
      estadoCivil: this.estadoCivil,
      montoPrestamo: this.montoPrestamo,
      montoFinalP: this.montoFinalP(),
      intereses: this.intereses(),
     
    };
  }
}

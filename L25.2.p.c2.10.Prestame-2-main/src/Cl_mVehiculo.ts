import Cl_mPrestamo from "./Cl_mPrestamo.js";

export default class Cl_mVehiculo extends Cl_mPrestamo{
  private _modelo: string = "";
  constructor({cedula,estadoCivil,modelo=""}: { 
    cedula: string;estadoCivil: string;modelo:string; }) { 
    super({ cedula, estadoCivil, montoPrestamo: 0 });
    this.modelo=modelo;
    this.montoPrestamo = this.montoPrestamoMod();
  }
  set modelo(modelo: string) {
    this._modelo = modelo;
  }
  get modelo(): string {
    return this._modelo;
  }
  montoPrestamoMod():number {
  if ( this.modelo==="N" || this.modelo==="n") {
    return 5000};
  if ( this.modelo==="U" || this.modelo==="u") {
    return 3000 };
  if ( this.modelo==="V" || this.modelo==="v") {
    return 1000 }; 
  return 0
  }
  montoFinalP():number { 
    if (this.estadoCivil=== "C" || this.estadoCivil=== "c") {
      return (this.montoPrestamoMod() * 0.10) + this.montoPrestamoMod();
  }
  if (this.estadoCivil=== "D"|| this.estadoCivil==="d" ||this.estadoCivil==="S" || this.estadoCivil==="s") {
    return (this.montoPrestamoMod() * 0) + this.montoPrestamoMod();
  }
 else return 0
  }

  intereses():number{
    return this.montoFinalP()* 0.20;}

  toJSON() {
    return {
      ...super.toJSON(),
      modelo: this.modelo,
    };
  }
}
 
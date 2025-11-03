import Cl_mPaquete from "./Cl_mPaquete.js";

export default class Cl_mNacional extends Cl_mPaquete{
  private _Destino: number = 0;
  constructor({Codigo,Costo,Destino,}: { 
    Codigo: number;Costo: number;Destino:number; }) { 
    super({ Codigo, Costo, });
    this.Destino=Destino;
   // this.modelo = this.montoPaqueteMod();
  }
  set Destino(Destino: number) {
    this._Destino = Destino;
  }
  get Destino(): number {
    return this._Destino;
  }

  // 1: Playa 0%.. 2:Montaña 10%
 
  Descuento():number {
  if (this.Destino == 1){
    return 0
  }
  else if (this.Destino == 2){
    return this.Costo * 0.10
  }
  else return 0
  }

  Total():number{
    return this.Costo - this.Descuento()
  }

  toJSON() {
    return {
      ...super.toJSON(),
      Destino: this.Destino,
     // totalito: this.Total() 
    };
  }
}
 
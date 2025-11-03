export default class Cl_mPaquete {
  public _Codigo: number = 0;
  public _Costo: number = 0;
  constructor({
    Codigo,
    Costo,
  }: {
    Codigo: number;
    Costo: number;
  }) {
    this.Codigo = Codigo;
    this.Costo = Costo;
  }
  set Codigo(Codigo: number) {
    this._Codigo = +Codigo;
  }
  get Codigo(): number {
    return this._Codigo;
  }
  set Costo(Costo: number) {
    this._Costo = +Costo;
  }
  get Costo(): number {
    return this._Costo;
  }

 Descuento(): number {
    return 0;
  }

 Total(): number {
    return 0;
  }
  toJSON() {
    return {
      Codigo: this.Codigo,
      Costo: this.Costo,
      Descuento: this.Descuento(),
      Total: this.Total(),
    };
  }
}

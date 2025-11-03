export default class Cl_mPromocion{
    public _codigo: string="";
    public _costo: number =0;

    constructor({codigo,costo,}: {
        codigo: string;
        costo:number;
    }) {
        this.codigo = codigo;
        this.costo= costo;
    }
    set codigo(codigo:string){
        this._codigo= codigo;
    }
    get codigo(): string{
        return this._codigo;
    }
    set costo(costo: number){
        this._costo= +costo;
    }
    get costo(): number{
        return this._costo;
    }
    descuento():number{
        return 0;
    }
    incremento():number{
        return 0;
    }
    precioF(): number{
        return 0;
    }
    
    toJSON(){
        return{
      codigo: this.codigo,
      costo:this.costo,
      descuento: this.descuento(),
      incremento:this.incremento(),
      precioF: this.precioF(),
       }
    }
    
}
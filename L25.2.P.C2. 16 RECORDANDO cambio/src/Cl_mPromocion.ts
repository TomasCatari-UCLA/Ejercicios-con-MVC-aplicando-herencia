export default class Cl_mPromocion{
    public _codigo: string="";
    public _costo: number =0;
    public _esUrgente:boolean= true||false;
    

    constructor({codigo,costo,esUrgente}: {
        codigo: string;
        costo:number;
        esUrgente:boolean;
    }) {
        this.codigo = codigo;
        this.costo= costo;
        this.esUrgente= esUrgente;
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
    set esUrgente(esUrgente:boolean){
        this._esUrgente= esUrgente;
    }
    get esUrgente():boolean{
        return this._esUrgente;
    }
    descuento():number{
        return 0;
    }
    incremento():number{
        return 0;
    }
    edicionEspecial(){
        return 0;
    }
    precioF(): number{
            return 0;
        
    }
    
    toJSON(){
        return{
      codigo: this.codigo,
      costo:this.costo,
      esUrgente: this.esUrgente,
      descuento: this.descuento(),
      incremento:this.incremento(),
      edicionEspecial:this.edicionEspecial(),
      precioF: this.precioF(),
       }
    }
    
}
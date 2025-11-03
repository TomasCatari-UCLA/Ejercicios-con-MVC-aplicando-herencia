export default class Cl_mPromocion{
   
    constructor({codigo,costo,}) {
        this._codigo="";
        this._costo=0;
        this.codigo = codigo;
        this.costo= costo;
    }
    set codigo(codigo){
        this._codigo= codigo;
    }
    get codigo(){
        return this._codigo;
    }
    set costo(costo){
        this._costo= +costo;
    }
    get costo(){
        return this._costo;
    }
    descuento(){
        return 0;
    }
    incremento(){
        return 0;
    }
    precioF(){
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
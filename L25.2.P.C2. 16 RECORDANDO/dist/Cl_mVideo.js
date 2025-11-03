import Cl_mPromocion from './Cl_mPromocion.js';

export default class Cl_mVideo extends Cl_mPromocion{
    
    constructor({hD,codigo,costo}){
        super({codigo,costo});
            this.hD= hD;
            
        
    }
    set hD(hD){
        this._hD= hD;
    }
    get hD(){
        return this._hD;
    }
    descuento(){
        return 0
    }
    incremento(){
        if(this.hD==="Si"){
            return this.costo* 0.20;
        }else
            return 0;
    }
    precioF() {
        return this.costo+this.incremento()-this.descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { hD: this.hD, descuento: this.descuento(),
    incremento: this.incremento(),
    precioF: this.precioF() });
    }

}
export default class Cl_mImpresora {
    public _id: number = 0;

    constructor({id} :{id: number; }) {this.id = id;}

    set id(id: number) {
        this._id = id;
    }
    get id(): number {
        return +this._id;
    }
    precioPagarRecarga(): number{
        return 0;
    }
    toJSON(){
        return{
      id: this.id,
      precioPagarRecarga: this.precioPagarRecarga(),
       }
    }
    
}


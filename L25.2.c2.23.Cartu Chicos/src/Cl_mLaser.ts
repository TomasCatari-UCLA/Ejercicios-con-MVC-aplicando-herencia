import Cl_mImpresora from "./Cl_mImpresora.js";

export default class Cl_mLaser extends Cl_mImpresora {
    public _cantToner: number = 0;

    constructor({cantToner=0,id=0}: {cantToner:number;id:number}) {
        super({id});
        this.cantToner=cantToner;
    }
    set cantToner(cantToner: number) {
        this._cantToner = cantToner;
    }
    get cantToner(): number {
        return this._cantToner;
    }
    precioPagarRecarga(): number {
        if (this.cantToner===1) {return 50;}
        if (this.cantToner>1 ) {return this.cantToner * 30;}
        else return 0;
    }
    toJSON() {
    return {
      ...super.toJSON(),
      cantToner: this.cantToner,
    };
    }
}
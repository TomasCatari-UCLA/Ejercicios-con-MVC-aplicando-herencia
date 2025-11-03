import Cl_mImpresora from "./Cl_mImpresora.js";

export default class Cl_mTinta extends Cl_mImpresora{
    public _tipoTinta: number = 0;

    constructor({tipoTinta=0,id=0}: { tipoTinta: number;id: number;}) {
        super({id});
        this.tipoTinta = tipoTinta;
    }
    set tipoTinta(tipoTinta: number) {
        this._tipoTinta = tipoTinta;
    }
    get tipoTinta(): number {
        return this._tipoTinta;
    }
    precioPagarRecarga(): number {
        if (this.tipoTinta===1){ return 20;}
        if (this.tipoTinta===2){ return 25;}
        else return 0;
    }
    toJSON() {
    return {
      ...super.toJSON(),
      tipoTinta: this.tipoTinta,
    };
  }
}
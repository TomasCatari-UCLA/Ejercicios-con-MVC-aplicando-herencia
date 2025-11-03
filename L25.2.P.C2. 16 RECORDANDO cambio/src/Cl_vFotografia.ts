import Cl_vPromocion from './Cl_vPromocion.js';

interface iFotografia {
    tipoF: string;
    codigo: string;
    costo: number;
    esUrgente:boolean;
}
export default class Cl_vFotografia extends Cl_vPromocion {
  private divInTipoF: HTMLElement;
    private inTipoF: HTMLInputElement;
    private btAceptar: HTMLElement;
  

    constructor() {
    super();
    this.divInTipoF = this.crearHTMLElement({ elementName: "divInTipoF" })  ;
    this.inTipoF = this.crearHTMLInputElement({ elementName: "inTipoF" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarFotografia",
      onclick: () => this.controlador?.procesarFotografia({
        codigo: this.codigo,
       costo: this.costo,
        tipoF: this.tipoF,
        esUrgente:this.esUrgente,
      }),
    });
  }

  get tipoF():string {
    return this.inTipoF.value;
  }

  show({ver = true}: {ver?: boolean}={ver: true}){
    super.show({ver, nombreTipo: "fotografia"});
    this.inTipoF.value = "";
    this.divInTipoF.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
  
}
export { iFotografia };

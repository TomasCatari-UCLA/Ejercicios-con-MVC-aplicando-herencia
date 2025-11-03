import Cl_vGeneral from './Cl_vGeneral.js';

export default class Cl_vPromocion extends Cl_vGeneral {
     private inCodigo: HTMLInputElement;
    private inCosto: HTMLInputElement;
    private inEsUrgente: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;
    constructor() {
    super({ formName: "promocionForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
    this.inCosto = this.crearHTMLInputElement({
      elementName: "inCosto",
    });
     this.inEsUrgente = this.crearHTMLInputElement({ elementName: "inEsUrgente" });
    
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",
      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show();
      },
    });
  }

  get codigo():string {
    return this.inCodigo.value;
  }
  get costo():number {
    return +this.inCosto.value;
  }
  get esUrgente():boolean{
     return this.inEsUrgente.checked;
  }
  show({
    ver = true,
    nombreTipo = "",
  }: {
    ver?: boolean;
    nombreTipo?: string;
  }): void {
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inCodigo.value = "";
    this.inCosto.value= "";
    this.inEsUrgente.checked = false;
    this.inCodigo.focus();
  }}


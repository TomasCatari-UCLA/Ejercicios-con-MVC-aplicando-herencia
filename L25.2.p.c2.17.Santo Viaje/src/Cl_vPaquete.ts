import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPrestamo extends Cl_vGeneral {
  private inCodigo: HTMLInputElement;
  private inCosto: HTMLInputElement;
  private lblTipo: HTMLElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "paqueteForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
    this.inCosto = this.crearHTMLInputElement({ elementName: "inCosto",});
    this.btCancelar = this.crearHTMLButtonElement({elementName: "btCancelar",
      onclick: () => { this.show({ ver: false });
       this.Controlador?.vista.show();}
       ,}
      ); 
    }

  get Codigo(): number {
    return +this.inCodigo.value;
  }
  get Costo(): number {
    return +this.inCosto.value;
  }
  
  show({ver = true,nombreTipo = "",}: { ver?: boolean;nombreTipo?: string;}): void {
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inCodigo.value = ""; 
    this.inCosto.value = "";
    this.inCodigo.focus();
  }
}

import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vImpresora extends Cl_vGeneral {
    private inId: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
    super({ formName: "ImpresoraForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inId = this.crearHTMLInputElement({ elementName: "inId" });
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",
      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show();
      },
    });
  }

  get Id(): number {
    return +this.inId.value;
  }
  show({ ver = true, nombreTipo = "",}: {ver?: boolean; nombreTipo?: string;}): void {
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inId.value = "";
    this.inId.focus();
  }
}

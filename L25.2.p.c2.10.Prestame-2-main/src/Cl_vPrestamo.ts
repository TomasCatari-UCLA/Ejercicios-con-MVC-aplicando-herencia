import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPrestamo extends Cl_vGeneral {
  private inCedula: HTMLInputElement;
  private inEstadoCivil: HTMLInputElement;
  protected inMontoPrestamo: HTMLInputElement;
  private lblTipo: HTMLElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "prestamoForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
    this.inEstadoCivil = this.crearHTMLInputElement({ elementName: "inEstadoCivil",});
    this.inMontoPrestamo = this.crearHTMLInputElement({elementName: "inMontoPrestamo",});
    this.btCancelar = this.crearHTMLButtonElement({elementName: "btCancelar",
      onclick: () => { this.show({ ver: false });
       this.controlador?.vista.show();}
       ,}
      ); 
    }

  get cedula(): string {
    return this.inCedula.value;
  }
  get estadoCivil(): string {
    return this.inEstadoCivil.value;
  }
  get montoPrestamo(): number {
    return +this.inMontoPrestamo.value;
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
    this.inCedula.value = "";
    this.inEstadoCivil.value = "";
    this.inMontoPrestamo.value = "";
    this.inCedula.focus();
  }
}

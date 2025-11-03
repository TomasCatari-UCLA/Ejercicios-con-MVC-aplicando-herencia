import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vFigura extends Cl_vGeneral {
  private inCodigo: HTMLInputElement;
  private inCoordX: HTMLInputElement;
  private inCoordY: HTMLInputElement;
  private lblTipo: HTMLElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "figuraForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
    this.inCoordX = this.crearHTMLInputElement({
      elementName: "inCoordX",
    });
    this.inCoordY = this.crearHTMLInputElement({
      elementName: "inCoordY",
    });
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",
      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show();
      },
    });
  }

  get codigo(): string {
    return this.inCodigo.value;
  }
  get coordX(): number {
    return +this.inCoordX.value;
  }
  get coordY(): number {
    return +this.inCoordY.value;
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
    this.inCoordX.value = "";
    this.inCoordY.value = "";
    this.inCodigo.focus();
  }
}
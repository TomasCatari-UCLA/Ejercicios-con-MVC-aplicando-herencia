import Cl_Controlador from "./Cl_Controlador.js";

export default class Cl_vGeneral {
  private _formName: string = "";
  private _vista: HTMLElement | null = null;
  private _Controlador: Cl_Controlador | null = null;
  constructor({ formName }: { formName: string }) {
    this.formName = formName;
    this.vista = this.crearHTMLElement({
      elementName: this.formName,
      isForm: true,
    });
  }
  set formName(formName: string) {
    this._formName = formName;
  }
  get formName(): string {
    return this._formName;
  }
  set vista(vista: HTMLElement) {
    this._vista = vista;
  }
  get vista(): HTMLElement | null {
    return this._vista;
  }
  set Controlador(Controlador: Cl_Controlador) {
    this._Controlador = Controlador;
  }
  get Controlador(): Cl_Controlador | null {
    return this._Controlador;
  }
  crearHTMLElement({
    elementName,
    isForm = false,
  }: {
    elementName: string;
    isForm?: boolean;
  }): HTMLElement {
    let domElementName = isForm
      ? elementName
      : `${this.formName}_${elementName}`;
    let domElement = document.getElementById(domElementName) as HTMLElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    return domElement;
  }
  crearHTMLInputElement({
    elementName,
  }: {
    elementName: string;
  }): HTMLInputElement {
    let domElementName = `${this.formName}_${elementName}`;
    let domElement = document.getElementById(
      domElementName
    ) as HTMLInputElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    return domElement;
  }
  crearHTMLButtonElement({
    elementName,
    onclick,
  }: {
    elementName: string;
    onclick?: () => void;
  }): HTMLButtonElement {
    let domElementName = `${this.formName}_${elementName}`;
    let domElement = document.getElementById(
      domElementName
    ) as HTMLButtonElement;
    if (!domElement) {
      let msg = `Elemento ${domElementName} no encontrado`;
      alert(msg);
      throw new Error(msg);
    }
    if (onclick) domElement.onclick = onclick;
    return domElement;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }): void {
    if (this.vista) this.vista.style.display = ver ? "flex" : "none";
  }
}

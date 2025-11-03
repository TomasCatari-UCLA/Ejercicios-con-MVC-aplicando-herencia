import Cl_vEmpleado from "./Cl_vEmpleado.js";
interface iDirectivos {
  id: number;
  nombre: string;
  sueldoBase: number;
  nocturno: string;
}

export default class Cl_vDirectivos extends Cl_vEmpleado {
  private divInNocturno: HTMLElement;
  private inNocturno: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInNocturno = this.crearHTMLElement({ elementName: "divInNocturno" });
    this.inNocturno = this.crearHTMLInputElement({ elementName: "inNocturno" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarDirectivo",
      onclick: () => this.controlador?.procesarEmpleadoDirectivos({
        id: this.id,
        nombre: this.Nombre,
        sueldoBase: this.sueldoBase,
        nocturno: this.nocturno
      }),
    });
  }
  get nocturno(): string {
    return this.inNocturno.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Directivo" });
    this.inNocturno.value = "";
    this.divInNocturno.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iDirectivos };

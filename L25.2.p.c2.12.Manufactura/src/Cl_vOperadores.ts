import Cl_vEmpleado from "./Cl_vEmpleado.js";
interface iOperadores {
  id: number;
  nombre: string;
  sueldoBase: number;
  horaExtra: number;
}

export default class Cl_vOperadores extends Cl_vEmpleado {
  private divInHoraExtra: HTMLElement;
  private inHoraExtra: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInHoraExtra = this.crearHTMLElement({ elementName: "divInHoraExtra" });
    this.inHoraExtra = this.crearHTMLInputElement({ elementName: "inHoraExtra" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarOperadores",
      onclick: () => this.controlador?.procesarEmpleadoOperadores({
        id: this.id,
        nombre: this.Nombre,
        sueldoBase: this.sueldoBase,
        horaExtra: this.horaExtra
      }),
    });
  }
  get horaExtra(): number {
    return +this.inHoraExtra.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Operadores" });
    this.inHoraExtra.value = "";
    this.divInHoraExtra.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iOperadores };
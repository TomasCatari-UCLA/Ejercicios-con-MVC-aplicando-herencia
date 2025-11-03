import Cl_vPrestamo from "./Cl_vPrestamo.js";
interface iVivienda {
  cedula: string;
  estadoCivil: string;
  montoPrestamo: number;
}

export default class Cl_vVivienda extends Cl_vPrestamo {
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarVivienda",
      onclick: () => this.controlador?.procesarPrestamoVivienda({
      cedula: this.cedula,
      estadoCivil: this.estadoCivil,
      montoPrestamo:this.montoPrestamo,
      }),
    });
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Vivienda" });
    this.btAceptar.hidden = ver === false;
  }
}
export { iVivienda };
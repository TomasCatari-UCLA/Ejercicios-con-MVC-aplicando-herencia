import Cl_vPaquete from "./Cl_vPaquete.js";
interface iInternacional{
  Codigo: number;
  Costo: number;
}

export default class Cl_vInternacional extends Cl_vPaquete {
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarInternacional",
      onclick: () => this.Controlador?.procesarPaqueteInternacional({
      Codigo: this.Codigo,
      Costo: this.Costo,
      }),
    });
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Internacional" });
    this.btAceptar.hidden = ver === false;
  }
}
export { iInternacional };
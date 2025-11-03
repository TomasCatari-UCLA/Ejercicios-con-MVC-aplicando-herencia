import Cl_vFigura from "./Cl_vFigura.js";
interface iCuadrado {
  codigo: string;
  coordX: number;
  coordY: number;
  lado: number;
}

export default class Cl_vCuadrado extends Cl_vFigura {
  private divInLado: HTMLElement;
  private inLado: HTMLInputElement;
  private btAceptar: HTMLElement;

  constructor() {
    super();
    this.divInLado = this.crearHTMLElement({ elementName: "divInLado" });
    this.inLado = this.crearHTMLInputElement({ elementName: "inLado" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarCuadrado",
      onclick: () => this.controlador?.procesarCuadrado({
        codigo: this.codigo,
        coordX: this.coordX,
        coordY: this.coordY,
        lado: this.lado
      }),
    });
  }

  get lado(): number {
    return +this.inLado.value;
  }

  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Cuadrado" });
    this.inLado.value = "";
    this.divInLado.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iCuadrado };
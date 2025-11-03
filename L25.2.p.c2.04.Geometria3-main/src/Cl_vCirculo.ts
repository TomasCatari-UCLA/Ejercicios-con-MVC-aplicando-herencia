import Cl_vFigura from "./Cl_vFigura.js";
interface iCirculo {
  codigo: string;
  coordX: number;
  coordY: number;
  radio: number;
}

export default class Cl_vCirculo extends Cl_vFigura {
  private divInRadio: HTMLElement;
  private inRadio: HTMLInputElement;
  private btAceptar: HTMLElement;

  constructor() {
    super();
    this.divInRadio = this.crearHTMLElement({ elementName: "divInRadio" });
    this.inRadio = this.crearHTMLInputElement({ elementName: "inRadio" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarCirculo",
      onclick: () => this.controlador?.procesarCirculo({
        codigo: this.codigo,
        coordX: this.coordX,
        coordY: this.coordY,
        radio: this.radio
      }),
    });
  }

  get radio(): number {
    return +this.inRadio.value;
  }

  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Círculo" });
    this.inRadio.value = "";
    this.divInRadio.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iCirculo };
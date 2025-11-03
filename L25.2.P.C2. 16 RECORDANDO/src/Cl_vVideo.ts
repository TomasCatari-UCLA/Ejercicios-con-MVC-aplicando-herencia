import Cl_vPromocion from "./Cl_vPromocion.js";

interface iVideo {
    hD: string;
    codigo: string;
    costo: number;
}

export default class Cl_vVideo extends Cl_vPromocion{
    private divInHD: HTMLElement;
    private inHD: HTMLInputElement;
    private btAceptar: HTMLElement;

    constructor() {
    super();
    this.divInHD = this.crearHTMLElement({ elementName: "divInHD" });
    this.inHD = this.crearHTMLInputElement({ elementName: "inHD" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarVideo",
      onclick: () => this.controlador?.procesarVideo({
        codigo: this.codigo,
        costo: this.costo,
        hD: this.hD,
      }),
    });
  }
  get hD(): string {
    return this.inHD.value;
  }

  show({ver = true}: {ver?: boolean} = {ver: true}){
    super.show({ver, nombreTipo: "video"});
    this.inHD.value = "";
    this.divInHD.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}
export { iVideo};
import Cl_vDisfraz from "./Cl_vDisfraz.js";


interface iNiño {
    accesorio: string;
    codigo: string;
    nombre: string;
    talla: string;
    precio: number;
}

export default class Cl_vNiño extends Cl_vDisfraz {
    private divInAccesorio: HTMLElement;
    private inAccesorio: HTMLInputElement;
    private btAceptar: HTMLElement;

    constructor() {
    super();
    this.divInAccesorio = this.crearHTMLElement({ elementName: "divInAccesorio" });
    this.inAccesorio = this.crearHTMLInputElement({ elementName: "inAccesorio" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarNiño",
      onclick: () => this.controlador?.procesarNiño({
        codigo: this.codigo,
        nombre: this.nombre,
        talla: this.talla,
        precio: this.precio,
        accesorio: this.accesorio,
      }),
    });
  }

  get accesorio(): string {
    return this.inAccesorio.value;
  }

  show({ver = true}: {ver?: boolean} = {ver: true}){
    super.show({ver, nombreTipo: "Niño"});
    this.inAccesorio.value = "";
    this.divInAccesorio.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}
export { iNiño};
import Cl_vDisfraz from "./Cl_vDisfraz.js";

interface iAdulto {
    sexo: string;
    codigo: string;
    nombre: string;
    talla: string;
    precio: number;
}

export default class Cl_vAdulto extends Cl_vDisfraz{
    private divInSexo: HTMLElement;
    private inSexo: HTMLInputElement;
    private btAceptar: HTMLElement;

    constructor() {
    super();
    this.divInSexo = this.crearHTMLElement({ elementName: "divInSexo" });
    this.inSexo = this.crearHTMLInputElement({ elementName: "inSexo" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarAdulto",
      onclick: () => this.controlador?.procesarAdulto({
        codigo: this.codigo,
        nombre: this.nombre,
        talla: this.talla,
        precio: this.precio,
        sexo: this.sexo,
      }),
    });
  }
  get sexo(): string {
    return this.inSexo.value;
  }

  show({ver = true}: {ver?: boolean} = {ver: true}){
    super.show({ver, nombreTipo: "Adulto"});
    this.inSexo.value = "";
    this.divInSexo.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}
export { iAdulto};

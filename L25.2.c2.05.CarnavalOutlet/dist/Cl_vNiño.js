import Cl_vDisfraz from "./Cl_vDisfraz.js";

export default class Cl_vNiño extends Cl_vDisfraz {
  

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

  get accesorio() {
    return this.inAccesorio.value;
  }

  show({ver = true}= {ver: true}){
    super.show({ver, nombreTipo: "niño"});
    this.inAccesorio.value = "";
    this.divInAccesorio.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}

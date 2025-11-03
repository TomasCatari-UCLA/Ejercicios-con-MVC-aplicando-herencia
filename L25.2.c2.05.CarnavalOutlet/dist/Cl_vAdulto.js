import Cl_vDisfraz from "./Cl_vDisfraz.js";

export default class Cl_vAdulto extends Cl_vDisfraz{

    constructor() {
    super();
    this.divInSexo = this.crearHTMLElement({ elementName: "divInSexo" });
    this.inSexo = this.crearHTMLInputElement({ elementName: "inSexo" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptarAdulto",
    onclick: () => {
      var _a;
     return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarAdulto({
        codigo: this.codigo,
        nombre: this.nombre,
        talla: this.talla,
        precio: this.precio,
        sexo: this.sexo,
      });
    },
 });
}
  get sexo(){
    return this.inSexo.value;
  }

  show({ver = true} = {ver: true}){
    super.show({ver, nombreTipo: "adulto"});
    this.inSexo.value = "";
    this.divInSexo.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}


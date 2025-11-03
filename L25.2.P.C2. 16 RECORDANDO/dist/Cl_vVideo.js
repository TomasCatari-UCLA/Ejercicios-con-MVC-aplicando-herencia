import Cl_vPromocion from './Cl_vPromocion.js';

export default class Cl_vVideo extends Cl_vPromocion{

    constructor() {
    super();
    this.divInHD = this.crearHTMLElement({ elementName: "divInHD" });
    this.inHD = this.crearHTMLInputElement({ elementName: "inHD" });
    this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarFotografia",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarVideo({
                    codigo: this.codigo,
                    costo:this.costo,
                    hD: this.hD,
                });
            },
        })
      };
  get hD(){
    return this.inHD.value;
  }

  show({ver = true} = {ver: true}){
    super.show({ver, nombreTipo: "video"});
    this.inHD.value = "";
    this.divInHD.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}

import Cl_vPromocion from "./Cl_vPromocion.js";

export default class Cl_vFotografia extends Cl_vPromocion {
 

    constructor() {
    super();
    this.divInTipoF = this.crearHTMLElement({ elementName: "divInTipoF" })  ;
    this.inTipoF = this.crearHTMLInputElement({ elementName: "inTipoF" });
    this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarFotografia",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarFotografia({
                    codigo: this.codigo,
                    costo:this.costo,
                    tipoF: this.tipoF,
                });
            },
        })
      };

  get tipoF(){
    return this.inTipoF.value;
  }

  show({ver = true}={ver: true}){
    super.show({ver, nombreTipo: "fotografia"});
    this.inTipoF.value = "";
    this.divInTipoF.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }}

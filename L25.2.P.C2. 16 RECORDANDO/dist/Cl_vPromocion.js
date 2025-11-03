import Cl_vGeneral from './Cl_vGeneral.js';

export default class Cl_vPromocion extends Cl_vGeneral {
    constructor() {
    super({ formName: "promocionForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
    this.inCosto = this.crearHTMLInputElement({
      elementName: "inCosto",
    });
    
    this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        })};
  get codigo(){
    return this.inCodigo.value;
  }
  get costo() {
    return +this.inCosto.value;
  }
  
  show({
    ver = true,
    nombreTipo = "",
  }){
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inCodigo.value = "";
    this.inCosto.value= "";
    this.inCodigo.focus();
  }}


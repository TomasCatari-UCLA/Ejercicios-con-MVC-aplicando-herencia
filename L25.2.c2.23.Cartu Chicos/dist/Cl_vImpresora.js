import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vImpresora extends Cl_vGeneral {
    constructor() {
        super({ formName: "ImpresoraForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inId = this.crearHTMLInputElement({ elementName: "inId" });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get Id() {
        return +this.inId.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inId.value = "";
        this.inId.focus();
    }
}

import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPrestamo extends Cl_vGeneral {
    constructor() {
        super({ formName: "prestamoForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
        this.inEstadoCivil = this.crearHTMLInputElement({ elementName: "inEstadoCivil", });
        this.inMontoPrestamo = this.crearHTMLInputElement({ elementName: "inMontoPrestamo", });
        this.btCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get cedula() {
        return this.inCedula.value;
    }
    get estadoCivil() {
        return this.inEstadoCivil.value;
    }
    get montoPrestamo() {
        return +this.inMontoPrestamo.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCedula.value = "";
        this.inEstadoCivil.value = "";
        this.inMontoPrestamo.value = "";
        this.inCedula.focus();
    }
}

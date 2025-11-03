import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPersona extends Cl_vGeneral {
    constructor() {
        super({ formName: "PersonaForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
        this.inNombre = this.crearHTMLInputElement({ elementName: "inNombre" });
        this.inEdad = this.crearHTMLInputElement({ elementName: "inEdad" });
        this.inSexo = this.crearHTMLInputElement({ elementName: "inSexo" });
        this.inEstadoCivil = this.crearHTMLInputElement({ elementName: "inEstadoCivil" });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get cedula() { return this.inCedula.value; }
    get nombre() { return this.inNombre.value; }
    get edad() { return +this.inEdad.value; }
    get sexo() { return this.inSexo.value; }
    get estadoCivil() { return +this.inEstadoCivil.value; }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.inEdad.value = "";
        this.inSexo.value = "";
        this.inEstadoCivil.value = "";
        this.inCedula.focus();
    }
}

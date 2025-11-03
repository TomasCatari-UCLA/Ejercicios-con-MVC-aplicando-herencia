import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vEmpleado extends Cl_vGeneral {
    constructor() {
        super({ formName: "empleadoForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inId = this.crearHTMLInputElement({ elementName: "inId" });
        this.inNombre = this.crearHTMLInputElement({ elementName: "inNombre", });
        this.inSueldoBase = this.crearHTMLInputElement({ elementName: "inSueldoBase", });
        this.inAntiguedad = this.crearHTMLInputElement({ elementName: "inAntiguedad", });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get id() {
        return +this.inId.value;
    }
    get Nombre() {
        return this.inNombre.value;
    }
    get sueldoBase() {
        return +this.inSueldoBase.value;
    }
    get antiguedad() {
        return +this.inAntiguedad.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inId.value = "";
        this.inNombre.value = "";
        this.inSueldoBase.value = "";
        this.inAntiguedad.value = "";
        this.inId.focus();
    }
}

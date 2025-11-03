import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vFigura extends Cl_vGeneral {
    constructor() {
        super({ formName: "figuraForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCodigo = this.crearHTMLInputElement({ elementName: "inCodigo" });
        this.inCoordX = this.crearHTMLInputElement({
            elementName: "inCoordX",
        });
        this.inCoordY = this.crearHTMLInputElement({
            elementName: "inCoordY",
        });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get codigo() {
        return this.inCodigo.value;
    }
    get coordX() {
        return +this.inCoordX.value;
    }
    get coordY() {
        return +this.inCoordY.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCodigo.value = "";
        this.inCoordX.value = "";
        this.inCoordY.value = "";
        this.inCodigo.focus();
    }
}

import Cl_vMobilario from "./Cl_vMobilario.js";
export default class Cl_vMueble extends Cl_vMobilario {
    constructor() {
        super();
        this.inTela = this.crearHTMLInputElement({ elementName: "inTela" });
        this.divTela = this.crearHTMLInputElement({ elementName: "divTela" });
        this.btnAceptar = this.crearHTMLButtonElement({
            elementName: "btnAceptarMueble",
            onclick: () => {
                var _a;
                return (_a = this.Controlador) === null || _a === void 0 ? void 0 : _a.procesarMobilarioMueble({
                    madera: this.madera,
                    factura: this.factura,
                    tela: this.tela,
                });
            },
        });
    }
    get tela() {
        return +this.inTela.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Mueble" });
        this.inTela.value = "";
        this.divTela.hidden = ver === false;
        this.btnAceptar.hidden = ver === false;
    }
}

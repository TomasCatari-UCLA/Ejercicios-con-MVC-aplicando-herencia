import Cl_vMobilario from "./Cl_vMobilario.js";
export default class Cl_vComedor extends Cl_vMobilario {
    constructor() {
        super();
        this.inSillas = this.crearHTMLInputElement({ elementName: "inSillas" });
        this.divSillas = this.crearHTMLInputElement({ elementName: "divSillas" });
        this.btnAceptar = this.crearHTMLButtonElement({
            elementName: "btnAceptarComedor",
            onclick: () => {
                var _a;
                return (_a = this.Controlador) === null || _a === void 0 ? void 0 : _a.procesarMobilarioComedor({
                    madera: this.madera,
                    factura: this.factura,
                    sillas: this.sillas,
                });
            },
        });
    }
    get sillas() {
        return +this.inSillas.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Mueble" });
        this.inSillas.value = "";
        this.divSillas.hidden = ver === false;
        this.btnAceptar.hidden = ver === false;
    }
}

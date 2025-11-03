import Cl_vFigura from "./Cl_vFigura.js";
export default class Cl_vCirculo extends Cl_vFigura {
    constructor() {
        super();
        this.divInRadio = this.crearHTMLElement({ elementName: "divInRadio" });
        this.inRadio = this.crearHTMLInputElement({ elementName: "inRadio" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarCirculo",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarCirculo({
                    codigo: this.codigo,
                    coordX: this.coordX,
                    coordY: this.coordY,
                    radio: this.radio
                });
            },
        });
    }
    get radio() {
        return +this.inRadio.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Círculo" });
        this.inRadio.value = "";
        this.divInRadio.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

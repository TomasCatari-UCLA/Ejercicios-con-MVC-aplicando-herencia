import Cl_vFigura from "./Cl_vFigura.js";
export default class Cl_vCuadrado extends Cl_vFigura {
    constructor() {
        super();
        this.divInLado = this.crearHTMLElement({ elementName: "divInLado" });
        this.inLado = this.crearHTMLInputElement({ elementName: "inLado" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarCuadrado",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarCuadrado({
                    codigo: this.codigo,
                    coordX: this.coordX,
                    coordY: this.coordY,
                    lado: this.lado
                });
            },
        });
    }
    get lado() {
        return +this.inLado.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Cuadrado" });
        this.inLado.value = "";
        this.divInLado.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

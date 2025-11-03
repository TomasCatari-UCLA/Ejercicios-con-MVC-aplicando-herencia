import Cl_vImpresora from "./Cl_vImpresora.js";
export default class Cl_vLaser extends Cl_vImpresora {
    constructor() {
        super();
        this.divCantToner = this.crearHTMLElement({ elementName: "divCantToner" });
        this.inCantToner = this.crearHTMLInputElement({ elementName: "inCantToner" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarLaser",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarLaser({
                    id: this.Id,
                    cantToner: this.cantToner,
                });
            },
        });
    }
    get cantToner() {
        return +this.inCantToner.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Laser" });
        this.inCantToner.value = "";
        this.divCantToner.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

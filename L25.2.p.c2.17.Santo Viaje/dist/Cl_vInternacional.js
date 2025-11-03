import Cl_vPaquete from "./Cl_vPaquete.js";
export default class Cl_vInternacional extends Cl_vPaquete {
    constructor() {
        super();
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarInternacional",
            onclick: () => {
                var _a;
                return (_a = this.Controlador) === null || _a === void 0 ? void 0 : _a.procesarPaqueteInternacional({
                    Codigo: this.Codigo,
                    Costo: this.Costo,
                });
            },
        });
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Internacional" });
        this.btAceptar.hidden = ver === false;
    }
}

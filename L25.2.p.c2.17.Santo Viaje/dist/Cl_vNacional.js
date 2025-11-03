import Cl_vPaquete from "./Cl_vPaquete.js";
export default class Cl_vNacional extends Cl_vPaquete {
    constructor() {
        super();
        this.divInDestino = this.crearHTMLElement({ elementName: "divInDestino" });
        this.inDestino = this.crearHTMLInputElement({ elementName: "inDestino" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarNacional",
            onclick: () => {
                var _a;
                return (_a = this.Controlador) === null || _a === void 0 ? void 0 : _a.procesarPaqueteNacional({
                    Codigo: this.Codigo,
                    Costo: this.Costo,
                    Destino: this.Destino,
                });
            },
        });
    }
    get Destino() {
        return +this.inDestino.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Nacional" });
        this.inDestino.value = "";
        this.divInDestino.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

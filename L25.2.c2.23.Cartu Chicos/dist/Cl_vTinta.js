import Cl_vImpresora from "./Cl_vImpresora.js";
export default class Cl_vTinta extends Cl_vImpresora {
    constructor() {
        super();
        this.divIntipoTinta = this.crearHTMLElement({ elementName: "divIntipoTinta" });
        this.intipoTinta = this.crearHTMLInputElement({ elementName: "intipoTinta" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarTinta",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarTinta({
                    id: this.Id,
                    tipoTinta: this.tipoTinta,
                });
            },
        });
    }
    get tipoTinta() {
        return +this.intipoTinta.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Tinta" });
        this.intipoTinta.value = "";
        this.divIntipoTinta.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

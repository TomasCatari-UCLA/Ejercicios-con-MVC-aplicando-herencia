import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vMobilario extends Cl_vGeneral {
    constructor() {
        super({ formName: "mobilarioForm" });
        this.inMadera = this.crearHTMLInputElement({ elementName: "inMadera" });
        this.inFactura = this.crearHTMLInputElement({ elementName: "inFactura" });
        this.tipId = this.crearHTMLInputElement({ elementName: "lblTipo" });
        this.btnCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.Controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get madera() {
        return +this.inMadera.value;
    }
    get factura() {
        return +this.inFactura.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.tipId.innerHTML = nombreTipo;
        this.inMadera.value = "";
        this.inFactura.value = "";
        this.inMadera.focus();
    }
}

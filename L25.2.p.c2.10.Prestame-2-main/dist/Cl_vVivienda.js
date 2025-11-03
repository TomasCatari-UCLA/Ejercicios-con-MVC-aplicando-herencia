import Cl_vPrestamo from "./Cl_vPrestamo.js";
export default class Cl_vVivienda extends Cl_vPrestamo {
    constructor() {
        super();
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarVivienda",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarPrestamoVivienda({
                    cedula: this.cedula,
                    estadoCivil: this.estadoCivil,
                    montoPrestamo: this.montoPrestamo,
                });
            },
        });
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Vivienda" });
        this.btAceptar.hidden = ver === false;
    }
}

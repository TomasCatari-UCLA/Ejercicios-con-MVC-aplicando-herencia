import Cl_vEmpleado from "./Cl_vEmpleado.js";
export default class Cl_vOperadores extends Cl_vEmpleado {
    constructor() {
        super();
        this.divInHoraExtra = this.crearHTMLElement({ elementName: "divInHoraExtra" });
        this.inHoraExtra = this.crearHTMLInputElement({ elementName: "inHoraExtra" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarOperadores",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarEmpleadoOperadores({
                    id: this.id,
                    nombre: this.Nombre,
                    sueldoBase: this.sueldoBase,
                    horaExtra: this.horaExtra
                });
            },
        });
    }
    get horaExtra() {
        return +this.inHoraExtra.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Operadores" });
        this.inHoraExtra.value = "";
        this.divInHoraExtra.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}

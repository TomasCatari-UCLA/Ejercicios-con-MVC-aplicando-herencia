import Cl_vPrestamo from "./Cl_vPrestamo.js";
export default class Cl_vVehiculo extends Cl_vPrestamo {
    constructor() {
        super();
        this.divInModelo = this.crearHTMLElement({ elementName: "divInModelo" });
        this.inModelo = this.crearHTMLInputElement({ elementName: "inModelo" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarVehiculo",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarPrestamoVehiculo({
                    cedula: this.cedula,
                    estadoCivil: this.estadoCivil,
                    modelo: this.modelo,
                });
            },
        });
    }
    get modelo() {
        return this.inModelo.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Vehículo" });
        this.inModelo.value = "";
        this.divInModelo.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
        // 💡 CAMBIO AQUÍ: Ahora buscamos el DIV contenedor que incluye el label y el input
        try {
            const montoContainer = this.crearHTMLElement({ elementName: "divMontoPrestamo" });
            montoContainer.hidden = ver;
        }
        catch (e) {
            // Manejo de errores opcional
        }
    }
}

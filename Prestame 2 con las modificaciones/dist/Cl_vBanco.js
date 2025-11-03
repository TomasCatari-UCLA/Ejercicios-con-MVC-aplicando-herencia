import Cl_vVehiculo from "./Cl_vVehiculo.js";
import Cl_vVivienda from "./Cl_vVivienda.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
// Define una interfaz para el controlador
export default class Cl_vBanco extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vVivienda = new Cl_vVivienda();
        this._vVehiculo = new Cl_vVehiculo();
        this.dataPrestamo = this.crearHTMLElement({ elementName: "dataPrestamo" });
        this.lblMontoTotalPrestamos = this.crearHTMLElement({ elementName: "lblMontoTotalPrestamos", });
        this.lblMontoTotalIntereses = this.crearHTMLElement({ elementName: "lblMontoTotalIntereses", });
        this.lblPorcentajeIntereses = this.crearHTMLElement({ elementName: "lblPorcentajeIntereses", });
        this.lbltotalInteresNoP = this.crearHTMLElement({ elementName: "lbltotalInteresNoP", }); //aa
        this.btAgregarVida = this.crearHTMLButtonElement({ elementName: "btAgregarVivienda",
            onclick: () => {
                this.show({ ver: false });
                this.vVivienda.show();
            },
        });
        this.btAgregarVehiculo = this.crearHTMLButtonElement({ elementName: "btAgregarVehiculo",
            onclick: () => {
                this.show({ ver: false });
                this.vVehiculo.show();
            },
        });
        this.dataPrestamo.innerHTML = "";
        this.vVivienda.show({ ver: false });
        this.vVehiculo.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vVivienda.controlador = controlador;
        this.vVehiculo.controlador = controlador;
    }
    get vVivienda() {
        return this._vVivienda;
    }
    get vVehiculo() {
        return this._vVehiculo;
    }
    reportarPrestamo({ dataPrestamo, montoTotalPrestamos, montoTotalIntereses, porcentajeIntereses, totalInteresNoP }) {
        this.dataPrestamo.innerHTML += `
      <td class="colString">${dataPrestamo.cedula}</td>
      <td class="colString">${dataPrestamo.estadoCivil}</td>
      <td class="colNumber">${`$.${dataPrestamo.montoPrestamo}`}</td>
      <td class="colString">${dataPrestamo.modelo ? dataPrestamo.modelo : "--"}</td>
      <td class="colCurrency">${`$.${dataPrestamo.montoFinalP.toFixed(2)}`}</td>
      <td class="colCurrency">${`$.${dataPrestamo.intereses.toFixed(2)}`}</td> 
      `;
        this.lblMontoTotalPrestamos.innerHTML = montoTotalPrestamos.toFixed(2);
        this.lblMontoTotalIntereses.innerHTML = montoTotalIntereses.toFixed(2);
        this.lblPorcentajeIntereses.innerHTML = porcentajeIntereses.toFixed(2);
        this.lbltotalInteresNoP.innerHTML = totalInteresNoP.toFixed(2); //aa
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vVehiculo.show({ ver: false });
            this.vVivienda.show({ ver: false });
        }
    }
}

import Cl_vNacional from "./Cl_vNacional.js";
import Cl_vInternacional from "./Cl_vInternacional.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
// Define una interfaz para el controlador
export default class Cl_vAgencia extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vNacional = new Cl_vNacional();
        this._vInternacional = new Cl_vInternacional();
        this.dataPaquete = this.crearHTMLElement({ elementName: "dataPaquete" });
        this.lblTotalVentas = this.crearHTMLElement({ elementName: "lblTotalVentas", });
        this.lblPorcentaje = this.crearHTMLElement({ elementName: "lblPorcentaje", });
        this.lblpaquetesInternacioles = this.crearHTMLElement({ elementName: "lblpaquetesInternacioles", });
        this.btAgregarNacional = this.crearHTMLButtonElement({ elementName: "btAgregarNacional",
            onclick: () => {
                this.show({ ver: false });
                this.vNacional.show();
            },
        });
        this.btAgregarInternacional = this.crearHTMLButtonElement({ elementName: "btAgregarInternacional",
            onclick: () => {
                this.show({ ver: false });
                this.vInternacional.show();
            },
        });
        this.dataPaquete.innerHTML = "";
        this.vNacional.show({ ver: false });
        this.vInternacional.show({ ver: false });
    }
    set Controlador(Controlador) {
        super.Controlador = Controlador;
        this.vNacional.Controlador = Controlador;
        this.vInternacional.Controlador = Controlador;
    }
    get vNacional() {
        return this._vNacional;
    }
    get vInternacional() {
        return this._vInternacional;
    }
    reportarPaquete({ dataPaquete, TotalVentas, Porcentaje, paquetesInternacioles }) {
        this.dataPaquete.innerHTML += `
      <td class="colNumber">${dataPaquete.Codigo}</td>
      <td class="colNumber">${dataPaquete.Costo}</td>
      <td class="colNumber">${dataPaquete.Destino ? dataPaquete.Destino : "--"}</td>
      <td class="colCurrency">${`$.${dataPaquete.Descuento.toFixed(2)}`}</td>
      <td class="colCurrency">${`$.${dataPaquete.Total.toFixed(2)}`}</td> 
      `;
        this.lblTotalVentas.innerHTML = TotalVentas.toFixed(2);
        this.lblPorcentaje.innerHTML = Porcentaje.toFixed(2);
        this.lblpaquetesInternacioles.innerHTML = paquetesInternacioles.toFixed(0);
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vNacional.show({ ver: false });
            this.vInternacional.show({ ver: false });
        }
    }
}

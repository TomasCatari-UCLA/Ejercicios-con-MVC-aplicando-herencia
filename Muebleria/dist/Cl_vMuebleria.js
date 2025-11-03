import Cl_vComedor from "./Cl_vComedor.js";
import Cl_vMueble from "./Cl_vMueble.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
// Define una interfaz para el Controlador
export default class Cl_vMuebleria extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vMueble = new Cl_vMueble();
        this._vComedor = new Cl_vComedor();
        this.dataMobilario = this.crearHTMLElement({ elementName: "dataMobilario" });
        this.lblPorcentajeComedor = this.crearHTMLElement({ elementName: "lblPorcentajeComedor", });
        this.lblTotalVendido = this.crearHTMLElement({ elementName: "lblTotalVendido", });
        this.lblMayorVendido = this.crearHTMLElement({ elementName: "lblMayorVendido", });
        this.btnAgregarMueble = this.crearHTMLButtonElement({ elementName: "btnAgregarMueble",
            onclick: () => {
                this.show({ ver: false });
                this.vMueble.show();
            },
        });
        this.btnAgregarComedor = this.crearHTMLButtonElement({ elementName: "btnAgregarComedor",
            onclick: () => {
                this.show({ ver: false });
                this.vComedor.show();
            },
        });
        this.dataMobilario.innerHTML = "";
        this.vMueble.show({ ver: false });
        this.vComedor.show({ ver: false });
    }
    set Controlador(Controlador) {
        super.Controlador = Controlador;
        this.vMueble.Controlador = Controlador;
        this.vComedor.Controlador = Controlador;
    }
    get vMueble() {
        return this._vMueble;
    }
    get vComedor() {
        return this._vComedor;
    }
    reportarMobilario({ dataMobilario, porcentajeComedor, totalVendido, mayorVendido, m3, precio, precioM3, incremento }) {
        this.dataMobilario.innerHTML += `
    <td class="colNumber">${`${dataMobilario.factura}`}</td>
      <td class="colNumber">${dataMobilario.madera}</td>
      <td class="colNumber">${dataMobilario.sillas ? dataMobilario.sillas : "--"}</td>
      <td class="colNumber">${dataMobilario.tela ? dataMobilario.tela : "--"}</td>
      <td class="colNumber">${dataMobilario.precioM3.toFixed(2)}</td>
      <td class="colNumber">${dataMobilario.m3.toFixed(2)}</td>
      <td class="colNumber">${`$.${dataMobilario.incremento.toFixed(2)}`}</td>
      <td class="colNumber">${`$.${dataMobilario.precio.toFixed(2)}`}</td>
      `;
        this.lblPorcentajeComedor.innerHTML = porcentajeComedor.toFixed(2);
        this.lblTotalVendido.innerHTML = totalVendido.toFixed(2);
        {
            ` ${this.lblMayorVendido.innerHTML = mayorVendido.toString()}`;
        }
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vComedor.show({ ver: false });
            this.vMueble.show({ ver: false });
        }
    }
}

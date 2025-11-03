import Cl_vDirectivos from "./Cl_vDirectivos.js";
import Cl_vOperadores from "./Cl_vOperadores.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
interface iEmpleado {
  id: number;
  nombre: string;
  horaExtra?: number;
  nocturno?: string;
  sueldoBase: number;
  prima: number;
  adicional: number;
  sueldoMensual: number;
  
}

// Define una interfaz para el controlador
export default class Cl_vEmpresa extends Cl_vGeneral {
  private _vOperadores: Cl_vOperadores;
  private _vDirectivos: Cl_vDirectivos;
  private dataEmpleados: HTMLElement;
  private lblmontoTotalPagado: HTMLElement;
  private lblmontoAdicionalOperadores: HTMLElement;
  private lblmontoAdicionalDirectivos: HTMLElement;
  private btAgregarOperadores: HTMLElement;
  private btAgregarDirectivos: HTMLElement;

  constructor() {
    super({ formName: "mainForm" });
    this._vOperadores = new Cl_vOperadores();
    this._vDirectivos = new Cl_vDirectivos();
    this.dataEmpleados = this.crearHTMLElement({ elementName: "dataEmpleados" });
    this.lblmontoTotalPagado = this.crearHTMLElement({
      elementName: "lblmontoTotalPagado",
    });
    this.lblmontoAdicionalOperadores = this.crearHTMLElement({
      elementName: "lblmontoAdicionalOperadores",
    });
    this.lblmontoAdicionalDirectivos = this.crearHTMLElement({
      elementName: "lblmontoAdicionalDirectivos",
    });
    this.btAgregarOperadores = this.crearHTMLButtonElement({
      elementName: "btAgregarOperadores",
      onclick: () => {
        this.show({ ver: false });
        this.vOperadores.show();
      },
    });
    this.btAgregarDirectivos = this.crearHTMLButtonElement({
      elementName: "btAgregarDirectivos",
      onclick: () => {
        this.show({ ver: false });
        this.vDirectivos.show();
      },
    });

    this.dataEmpleados.innerHTML = "";
    this.vOperadores.show({ ver: false });
    this.vDirectivos.show({ ver: false });
  }
  set controlador(controlador: Cl_controlador) {
    super.controlador = controlador;
    this.vOperadores.controlador = controlador;
    this.vDirectivos.controlador = controlador;
  }
  get vOperadores() {
    return this._vOperadores;
  }
  get vDirectivos() {
    return this._vDirectivos;
  }
  reportarEmpleado({
    dataEmpleado,
    prima,
    adicional,
    sueldoMensual,
    montoTotalPagado,
    montoAdicionalOperadores,
    montoAdicionalDirectivo,
  }: {
    dataEmpleado: iEmpleado;
    prima: number;
    adicional: number;
    sueldoMensual: number,
    montoTotalPagado: number;
    montoAdicionalOperadores: number;
    montoAdicionalDirectivo: number;
  }): void {
    this.dataEmpleados.innerHTML += `
      <td class="colNumber">${dataEmpleado.id}</td>
      <td class="colNumber">${`${dataEmpleado.nombre}`}</td>
      <td class="colCurrency">${`$.${dataEmpleado.sueldoBase.toFixed(2)}`}</td>
      <td class="colNumber">${dataEmpleado.horaExtra ? dataEmpleado.horaExtra : "--"}</td>
      <td class="colNumber">${dataEmpleado.nocturno ? dataEmpleado.nocturno : "--"}</td>
      <td class="colCurrency">${`$.${dataEmpleado.prima.toFixed(2)}`}</td>
      <td class="colCurrency">${`$.${dataEmpleado.adicional.toFixed(2)}`}</td>
      <td class="colCurrency">${`$.${dataEmpleado.sueldoMensual.toFixed(2)}`}</td>
    `;
    this.lblmontoTotalPagado.innerHTML = montoTotalPagado.toFixed(2);
    this.lblmontoAdicionalOperadores.innerHTML = montoAdicionalOperadores.toFixed(2);
    this.lblmontoAdicionalDirectivos.innerHTML = montoAdicionalDirectivo.toFixed(2);
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver });
    if (ver) {
      this.vDirectivos.show({ ver: false });
      this.vOperadores.show({ ver: false });
    }
  }
}
import Cl_vCuadrado from "./Cl_vCuadrado.js";
import Cl_vCirculo from "./Cl_vCirculo.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

interface iFigura {
  codigo: string;
  coordX: number;
  coordY: number;
  lado?: number;
  radio?: number;
  area: number;
  perimetro: number;
  tipo?: string;
}

export default class Cl_vGeometria extends Cl_vGeneral {
  private _vCuadrado: Cl_vCuadrado;
  private _vCirculo: Cl_vCirculo;
  private dataFiguras: HTMLElement;
  private lblAreaTotal: HTMLElement;
  private lblFiguraMayor: HTMLElement;
  private btAgregarCuadrado: HTMLElement;
  private btAgregarCirculo: HTMLElement;

  constructor() {
    super({ formName: "mainForm" });
    this._vCuadrado = new Cl_vCuadrado();
    this._vCirculo = new Cl_vCirculo();
    this.dataFiguras = this.crearHTMLElement({ elementName: "dataFiguras" });
    this.lblAreaTotal = this.crearHTMLElement({ elementName: "lblAreaTotal" });
    this.lblFiguraMayor = this.crearHTMLElement({
      elementName: "lblFiguraMayor",
    });

    this.btAgregarCuadrado = this.crearHTMLButtonElement({
      elementName: "btAgregarCuadrado",
      onclick: () => {
        this.show({ ver: false });
        this.vCuadrado.show();
      },
    });
    this.btAgregarCirculo = this.crearHTMLButtonElement({
      elementName: "btAgregarCirculo",
      onclick: () => {
        this.show({ ver: false });
        this.vCirculo.show();
      },
    });

    this.dataFiguras.innerHTML = "";
    this.vCuadrado.show({ ver: false });
    this.vCirculo.show({ ver: false });
  }

  set controlador(controlador: Cl_controlador) {
    super.controlador = controlador;
    this.vCuadrado.controlador = controlador;
    this.vCirculo.controlador = controlador;
  }

  get vCuadrado() {
    return this._vCuadrado;
  }
  get vCirculo() {
    return this._vCirculo;
  }

  reportarFigura({
    dataFigura,
    areaTotal,
    figuraMayor,
  }: {
    dataFigura: iFigura;
    areaTotal: number;
    figuraMayor: string;
  }): void {
    this.dataFiguras.innerHTML += `
      <tr>
        <td class="colString">${dataFigura.codigo}</td>
        <td class="colString">${dataFigura.tipo}</td>
        <td class="colNumber">${dataFigura.coordX}</td>
        <td class="colNumber">${dataFigura.coordY}</td>
        <td class="colNumber">${dataFigura.lado ? dataFigura.lado : "--"}</td>
        <td class="colNumber">${dataFigura.radio ? dataFigura.radio : "--"}</td>
        <td class="colNumber">${dataFigura.area.toFixed(2)}</td>
        <td class="colNumber">${dataFigura.perimetro.toFixed(2)}</td>
      </tr>
    `;
    this.lblAreaTotal.innerHTML = areaTotal.toFixed(2);
    this.lblFiguraMayor.innerHTML = figuraMayor;
  }

  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver });
    if (ver) {
      this.vCuadrado.show({ ver: false });
      this.vCirculo.show({ ver: false });
    }
  }
}

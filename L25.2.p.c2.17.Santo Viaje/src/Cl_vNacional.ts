import Cl_vPaquete from "./Cl_vPaquete.js";
interface iNacional{
  Codigo: number;
  Costo: number;
  Destino: number;
}

export default class Cl_vNacional extends Cl_vPaquete{
  private divInDestino: HTMLElement;
  private inDestino: HTMLInputElement;
  private btAceptar: HTMLElement;
  constructor() {
    super();
    this.divInDestino = this.crearHTMLElement({ elementName: "divInDestino" });
    this.inDestino = this.crearHTMLInputElement({ elementName: "inDestino" });
    this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarNacional",
      onclick: () => this.Controlador?.procesarPaqueteNacional({
        Codigo: this.Codigo,
        Costo: this.Costo,
        Destino: this.Destino,
        
      }),
    });
  }
  get Destino (): number {
    return +this.inDestino.value;
  }
show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Nacional" });
    this.inDestino.value = "";
    this.divInDestino.hidden = ver === false;
    this.btAceptar.hidden = ver === false;  
  }
}
export { iNacional };



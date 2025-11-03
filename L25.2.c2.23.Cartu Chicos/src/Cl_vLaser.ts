import Cl_vImpresora from "./Cl_vImpresora.js";


interface iLaser {id: number;cantToner: number;}

export default class Cl_vLaser extends Cl_vImpresora {
    private divCantToner: HTMLElement;
    private inCantToner: HTMLInputElement;
    private btAceptar: HTMLElement;

    constructor() {
    super();
    this.divCantToner = this.crearHTMLElement({ elementName: "divCantToner" });
    this.inCantToner = this.crearHTMLInputElement({ elementName: "inCantToner" });
    this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarLaser",
      onclick: () => this.controlador?.procesarLaser({
        id: this.Id,
        cantToner: this.cantToner,
      }),
    });
  }

  get cantToner (): number {
    return +this.inCantToner.value;
  }

  show({ver = true}: {ver?: boolean} = {ver: true}){
    super.show({ver, nombreTipo: "Laser"});
    this.inCantToner.value = "";
    this.divCantToner.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}
export { iLaser};
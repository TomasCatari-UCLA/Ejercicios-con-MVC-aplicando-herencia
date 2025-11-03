import Cl_vImpresora from "./Cl_vImpresora.js";

interface iTinta {tipoTinta: number;id: number;
}

export default class Cl_vTinta extends Cl_vImpresora{
    private divIntipoTinta: HTMLElement;
    private intipoTinta: HTMLInputElement;
    private btAceptar: HTMLElement;

    constructor() {
    super();
    this.divIntipoTinta = this.crearHTMLElement({ elementName: "divIntipoTinta" });
    this.intipoTinta = this.crearHTMLInputElement({ elementName: "intipoTinta" });
    this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarTinta",
      onclick: () => this.controlador?.procesarTinta({
        id: this.Id,
        tipoTinta: this.tipoTinta,
      }),
    });
  }
  get tipoTinta(): number {
    return +this.intipoTinta.value;
  }

  show({ver = true}: {ver?: boolean} = {ver: true}){
    super.show({ver, nombreTipo: "Tinta"});
    this.intipoTinta.value = "";
    this.divIntipoTinta.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}
export { iTinta};

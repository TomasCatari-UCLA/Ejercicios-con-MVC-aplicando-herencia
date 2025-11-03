import Cl_vPersona from "./Cl_vPersona.js";


interface iEstudiante {nota:number;nombre: string;cedula:string;edad:number;sexo:string;estadoCivil:number}

export default class Cl_vEstudiante extends Cl_vPersona {
    private divNota: HTMLElement;
    private inNota: HTMLInputElement;
    private btAceptar: HTMLElement;

    constructor() {
    super();
    this.divNota = this.crearHTMLElement({ elementName: "divNota" });
    this.inNota = this.crearHTMLInputElement({ elementName: "inNota" });
    this.btAceptar = this.crearHTMLButtonElement({elementName: "btAceptarEstudiante",
      onclick: () => this.controlador?.procesarEstudiante({
        nombre: this.nombre,
        cedula:this.cedula,
        edad: this.edad,
        sexo:this.sexo,
        estadoCivil:this.estadoCivil,
        nota: this.nota,
      }),
    });
  }

  get nota (): number {
    return +this.inNota.value;
  }

  show({ver = true}: {ver?: boolean} = {ver: true}){
    super.show({ver, nombreTipo: "Estudiante"});
    this.inNota.value = "";
    this.divNota.hidden = ver === false;
    this.btAceptar.hidden = ver === false;

  }
}
export {iEstudiante};
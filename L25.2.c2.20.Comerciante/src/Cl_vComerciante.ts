import Cl_mPersona from "./Cl_vPersona.js";

interface iComerciante{
    cedula: string;
    nombre: string;
    edad: number;
    sexo: string;
    edoCivil: number;
}
export default class Cl_vComerciante extends Cl_mPersona{
    private btAceptar: HTMLElement;

    constructor(){
        super();
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptar",
            onclick: () => this.controlador?.procesarSolicitud({
                cedula: this.cedula,
                nombre: this.nombre,
                edad: this.edad,
                sexo: this.sexo,
                edoCivil: this.edoCivil
            }),
        });
    }
    show({ver = true}: {ver?: boolean} = {ver: true}){
        super.show({ver, nombreTipo: "Comerciante"});
        this.btAceptar.hidden = ver === false;
    }
}
export {iComerciante};
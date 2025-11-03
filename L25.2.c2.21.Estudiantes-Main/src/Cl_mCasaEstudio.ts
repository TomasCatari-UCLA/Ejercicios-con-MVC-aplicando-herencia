import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mCasaEstudio {
    private cntMenores: number = 0;
    private cntAprobadosMenores18: number=0;
    private cntAprobadosMenores20: number=0;
    private cntNoAprobados: number=0;
    private cntSolicitudes: number=0;
    private cntMenores20: number=0;
    constructor(){
    this.cntMenores= 0;
    this.cntAprobadosMenores18=0;
    this.cntAprobadosMenores20=0;
    this.cntNoAprobados= 0;
    this.cntSolicitudes=0;
    this.cntMenores20=0;
    } 
    procesarPersona(Persona: Cl_mPersona){

    if (Persona instanceof Cl_mEstudiante){
        if(Persona.edad<18) {
     this.cntMenores++;}}

    if (Persona instanceof Cl_mEstudiante){
    if(Persona.edad<18 && Persona.nota>17){
    this.cntAprobadosMenores18++;}}

    if (Persona instanceof Cl_mEstudiante){
    if(Persona.edad<=20){
    this.cntMenores20++;}}

    if (Persona instanceof Cl_mEstudiante){
    if(Persona.edad<=20 && Persona.nota>17 && Persona.estadoCivil===1 || Persona.estadoCivil===3){
    this.cntAprobadosMenores20++;}}

    if (Persona instanceof Cl_mEstudiante){
    if(Persona.solicitudBeca()==="No"){
    this.cntNoAprobados++;}}
    
    this.cntSolicitudes++;
    }
    cantidadMenores():number {
        return this.cntMenores;
    }
    cantidadMenoresAprobados():number {
        return this.cntAprobadosMenores18;
    }
    porcentajeAprobadosMenores20Años():number{
        return (this.cntAprobadosMenores20 / this.cntMenores20) * 100;
    }
    cantidadNoAprobados():number {
        return this.cntNoAprobados;
    }
     cantidadSolicitudes():number {
        return this.cntSolicitudes;
    }
    porcentajeNoFueronAprobadas():number{
        return (this.cantidadNoAprobados()/ this.cantidadSolicitudes()) * 100;
    }
}

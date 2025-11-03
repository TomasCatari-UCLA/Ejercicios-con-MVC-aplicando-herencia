import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mPersona from "./Cl_mPersona.js";
import Cl_mCasaEstudio from "./Cl_mCasaEstudio.js";
import Cl_vCasaEstudio from "./Cl_vCasaEstudio.js";
import { iEstudiante } from "./Cl_vEstudiante.js";
export default class Cl_controlador {
    public modelo: Cl_mCasaEstudio;
    public vista: Cl_vCasaEstudio;

    constructor(modelo: Cl_mCasaEstudio, vista: Cl_vCasaEstudio) {
        this.modelo = modelo;
        this.vista = vista;
    }

  procesarEstudiante(data: iEstudiante) {
    let mEstudiante = new Cl_mEstudiante({
      nota:data.nota,
      nombre:data.nombre ,
      cedula:data.cedula,
      edad:data.edad,
      sexo:data.sexo,
      estadoCivil:data.estadoCivil,
    });
    this.modelo.procesarPersona(mEstudiante);
    this.reportarPersona({ mPersona: mEstudiante });
  }

  reportarPersona({ mPersona }: { mPersona: Cl_mPersona }) {
    this.vista.reportarPersona({
      dataPersona: mPersona.toJSON(),
      cantidadMenores: this.modelo.cantidadMenores(),
      cantidadMenoresAprobados:this.modelo.cantidadMenoresAprobados(),
      porcentajeAprobadosMenores20Años: this.modelo.porcentajeAprobadosMenores20Años(),
      cantidadNoAprobados: this.modelo.cantidadNoAprobados(),
      cantidadSolicitudes: this.modelo.cantidadSolicitudes(),
      porcentajeNoFueronAprobadas: this.modelo.porcentajeNoFueronAprobadas(),
    });
    this.vista.show(); 
  }
}


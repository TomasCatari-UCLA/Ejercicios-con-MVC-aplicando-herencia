import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEstudiante(data) {
        let mEstudiante = new Cl_mEstudiante({
            nota: data.nota,
            nombre: data.nombre,
            cedula: data.cedula,
            edad: data.edad,
            sexo: data.sexo,
            estadoCivil: data.estadoCivil,
        });
        this.modelo.procesarPersona(mEstudiante);
        this.reportarPersona({ mPersona: mEstudiante });
    }
    reportarPersona({ mPersona }) {
        this.vista.reportarPersona({
            dataPersona: mPersona.toJSON(),
            cantidadMenores: this.modelo.cantidadMenores(),
            cantidadMenoresAprobados: this.modelo.cantidadMenoresAprobados(),
            porcentajeAprobadosMenores20Años: this.modelo.porcentajeAprobadosMenores20Años(),
            cantidadNoAprobados: this.modelo.cantidadNoAprobados(),
            cantidadSolicitudes: this.modelo.cantidadSolicitudes(),
            porcentajeNoFueronAprobadas: this.modelo.porcentajeNoFueronAprobadas(),
        });
        this.vista.show();
    }
}

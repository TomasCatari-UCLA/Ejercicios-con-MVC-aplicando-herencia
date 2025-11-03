//Clase mayor casaEstudio
//Clase menor Persona
//Clase derivada estudiante
import Cl_mCasaEstudio from "./Cl_mCasaEstudio.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vCasaEstudio from "./Cl_vCasaEstudio.js";
import Cl_mEstudiante from "./Cl_mEstudiante.js";
import { Estudiante } from "./_data.js";
export default class Cl_index {
    constructor() {
        // 1. Instanciar la Vista Principal
        let vista = new Cl_vCasaEstudio();
        // 2. Instanciar el Modelo Principal (Procesador)
        let modelo = new Cl_mCasaEstudio();
        // 3. Instanciar el Controlador, pasándole el Modelo y la Vista
        this.controlador = new Cl_controlador(modelo, vista);
        // 4. Asignar el controlador a la vista para la comunicación
        vista.controlador = this.controlador;
        // Cargar los datos de prueba iniciales
        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarEstudiante(new Cl_mEstudiante(Estudiante[0]));
        this.controlador.procesarEstudiante(new Cl_mEstudiante(Estudiante[1]));
        this.controlador.procesarEstudiante(new Cl_mEstudiante(Estudiante[2]));
        this.controlador.procesarEstudiante(new Cl_mEstudiante(Estudiante[3]));
        this.controlador.procesarEstudiante(new Cl_mEstudiante(Estudiante[4]));
    }
}

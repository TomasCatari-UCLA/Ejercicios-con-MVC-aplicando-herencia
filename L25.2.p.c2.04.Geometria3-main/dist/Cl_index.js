/**
 * GEOMETRÍA-3
 * Se conoce de cualquier figura geométrica un punto de origen,
 * es decir coordenadas x, y.
 * Para un Cuadrado se considera su punto de origen la esquina superior
 * izquierda, se tiene la longitud de su lado, y se sabe:
 * Área= Lado * Lado, Perímetro = 4 * Lado.
 * Ej: El cuadrado se ubica en las coordenadas 4, 5, tiene área de 25 y perímetro de 20.
 *
 * Para un Círculo se considera su punto de origen el centro del mismo, se
 * tiene la longitud de su radio, y se sabe: Área= pi * radio^2 (radio * radio)
 * Perímetro= 2 * pi * radio.
 * Ej: El círculo se ubica en las coordenadas 2, 3, tiene área de XX y perímetro
 * de YY. Nota: pi es una función disponible en JavaScript.
 *
 * Determine el área y el perímetro de cada figura, así como el área total que suman
 * todas las figuras y cual tipo de figura cubriría mayor espacio.
 *
 * Se tienen los siguientes datos de prueba:
 * Cuadrados {codigo, coordX, coordY, lado}
 * {cuad1, 2, 4, 3}
 * {cuad2, 1, 2, 5}
 * {cuad3, 1, -2, 4}
 * {cuad4, 0, 0, 8}
 *
 * Círculos {codigo, coordX, coordY, radio}
 * {circ1, 3, 0, 4}
 * {circ2, 1, -3, 2}
 * {circ3, 0, 0, 3}
 * {circ4, -2, -4, 5}
 *
 * Análisis:
 * a- Título: Geometría 3
 * b- Se procesan varias figuras para determinar el área y el perímetro de cada una, así
 *    como alguna información para el procesador de figuras
 *    Análisis de Herencia:
 *    - Clase base: Cl_mFigura
 *    - Clase derivada: Cl_mCirculo
 *    - Clase derivada: Cl_mCuadrado
 *    - Clase que procesa las figuras: Cl_mProcesador
 * c- Requerimientos:
 *    - Por figura: área y perímetro
 *    - Por procesador: c.1. El área total que suman todas las figuras
 *                      c.2. Cuál figura cubriría mayor espacio
 * d- Ejemplo: d.1. Cuadrado: coordX: 1, coordY: 2, lado: 3, área(): 9, perímetro(): 12
 *             d.2. Círculo: coordX: 0, coordY: 3, radio: 2,
 *                  área(): pi * radio * radio, perímetro(): 2 * pi * radio
 * e- Diseño de clases del modelo:
 *    e.1. Cl_mFigura
 *          #coordX: number
 *          #coordY: number
 *          +constructor(coordX: number, coordY: number)
 *          +area(): number {abstract}
 *          +perimetro(): number {abstract}
 *    e.2. Cl_mCirculo extends Cl_mFigura
 *          #radio: number
 *          +constructor(coordX: number, coordY: number, radio: number)
 *          +area(): number
 *          +perimetro(): number
 *    e.3. Cl_mCuadrado extends Cl_mFigura
 *          #lado: number
 *          +constructor(coordX: number, coordY: number, lado: number)
 *          +area(): number
 *          +perimetro(): number
 *    e.4. Cl_mProcesador
 *          -acAreaCirculos: number
 *          -acAreaCuadrados: number
 *          +constructor()
 *          +procesarFigura(figura: Cl_mFigura): void
 *          +areaTotal(): number
 *          +figuraMayorEspacio(): Cl_mFigura
 */
import Cl_mProcesador from "./Cl_mProcesador.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeometria from "./Cl_vGeometria.js";
import { cuadrados, circulos } from "./_data.js";
export default class Cl_index {
    constructor() {
        // 1. Instanciar la Vista Principal
        const vista = new Cl_vGeometria();
        // 2. Instanciar el Modelo Principal (Procesador)
        const modelo = new Cl_mProcesador();
        // 3. Instanciar el Controlador, pasándole el Modelo y la Vista
        this.controlador = new Cl_controlador(modelo, vista);
        // 4. Asignar el controlador a la vista para la comunicación
        vista.controlador = this.controlador;
        // Cargar los datos de prueba iniciales
        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarCuadrado(cuadrados[0]);
        this.controlador.procesarCuadrado(cuadrados[1]);
        this.controlador.procesarCuadrado(cuadrados[2]);
        this.controlador.procesarCuadrado(cuadrados[3]);
        this.controlador.procesarCirculo(circulos[0]);
        this.controlador.procesarCirculo(circulos[1]);
        this.controlador.procesarCirculo(circulos[2]);
        this.controlador.procesarCirculo(circulos[3]);
    }
}

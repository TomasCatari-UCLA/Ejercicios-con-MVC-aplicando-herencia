// **= req terminado
// PARA LA CLASE EMPLEADO :
// Para incentivar a losempleados se les dara un bono de antiguedad
// este bono vale 10 dolares que valdra segun los años de antiguedad
// y este bono se duplicara si las horas extra por partes de los operadores
// superan las 30 horas extra y por el Directivo si es nocturno
// **PARA CLASE HIJA CL_MOPERADORES
// EXPONER AL OPERADOR QUE MAS EXPLOTARON LABORALMENTE(Al que más trabajo pues)
// **PARA LA CLASE MAYOR EN BASE A DIRECTIVOS:
// CONFIRMAR SI EN LA EMPRESA HAY MÁS DE 10 DIRECTIVOS 
export default class Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, antiguedad }) {
        this._id = 0;
        this._nombre = "";
        this._sueldoBase = 0;
        this._antiguedad = 0;
        this.id = id;
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
        this.antiguedad = antiguedad;
    }
    set id(id) {
        this._id = +id;
    }
    get id() {
        return this._id;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set sueldoBase(sueldoBase) {
        this._sueldoBase = +sueldoBase;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }
    set antiguedad(antiguedad) {
        this._antiguedad = +antiguedad;
    }
    get antiguedad() {
        return this._antiguedad;
    }
    sueldoMensual() {
        return 0;
    }
    prima() {
        return 0;
    }
    adicional() {
        return 0;
    }
    bonoAntiguedad() {
        return 0;
    }
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            sueldoBase: this.sueldoBase,
            antiguedad: this.antiguedad,
            sueldoMensual: this.sueldoMensual(),
            prima: this.prima(),
            adicional: this.adicional(),
            bonoAntiguedad: this.bonoAntiguedad()
        };
    }
}

export default class Cl_mFigura {
    constructor({ codigo, coordX, coordY, }) {
        // Propiedades con un guion bajo, un patrón común para indicar que
        // se deben usar los getters y setters para acceder a ellas.
        this._codigo = "";
        this._coordX = 0;
        this._coordY = 0;
        this.codigo = codigo;
        this.coordX = coordX;
        this.coordY = coordY;
    }
    // Setters y Getters para cada propiedad
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set coordX(coordX) {
        this._coordX = +coordX;
    }
    get coordX() {
        return this._coordX;
    }
    set coordY(coordY) {
        this._coordY = +coordY;
    }
    get coordY() {
        return this._coordY;
    }
    // Métodos que serán sobreescritos por las clases hijas
    area() {
        return 0; // Implementación base
    }
    perimetro() {
        return 0; // Implementación base
    }
    // Devuelve un objeto simple con los datos de la figura para facilitar su visualización
    toJSON() {
        return {
            codigo: this.codigo,
            coordX: this.coordX,
            coordY: this.coordY,
            area: this.area(),
            perimetro: this.perimetro(),
        };
    }
}

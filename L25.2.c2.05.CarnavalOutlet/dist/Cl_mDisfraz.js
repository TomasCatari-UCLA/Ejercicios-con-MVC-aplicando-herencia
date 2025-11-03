export default class Cl_mDisfraz {

    constructor({codigo, nombre, talla, precio} ) {
         this._codigo = "";
        this._nombre = "";
        this._talla = "";
        this._precio = 0;
        this.codigo = codigo;
        this.nombre = nombre;
        this.talla = talla;
        this.precio = precio;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set talla(talla) {
        this._talla = talla;
    }
    get talla() {
        return this._talla;
    }
    set precio(precio) {
        this._precio = +precio;
    }
    get precio(){
        return this._precio;
    }
    precioFinal(){
        return 0;
    }
    toJSON(){
        return{
      codigo: this.codigo,
      nombre: this.nombre,
      talla: this.talla,
      precio: this.precio,
      precioFinal: this.precioFinal(),
       }
    }
    
}
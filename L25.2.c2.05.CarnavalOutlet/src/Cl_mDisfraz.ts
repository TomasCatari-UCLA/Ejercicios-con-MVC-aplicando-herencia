export default class Cl_mDisfraz {
    public _codigo: string = "";
    public _nombre: string = "";
    public _talla: string = "";
    public _precio: number = 0;

    constructor({codigo, nombre, talla, precio} :{
        codigo: string;
        nombre: string;
        talla: string;
        precio: number;
    }) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.talla = talla;
        this.precio = precio;
    }
    set codigo(codigo: string) {
        this._codigo = codigo;
    }
    get codigo(): string {
        return this._codigo;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }
    set talla(talla: string) {
        this._talla = talla;
    }
    get talla(): string {
        return this._talla;
    }
    set precio(precio: number) {
        this._precio = +precio;
    }
    get precio(): number {
        return this._precio;
    }
    precioFinal(): number{
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
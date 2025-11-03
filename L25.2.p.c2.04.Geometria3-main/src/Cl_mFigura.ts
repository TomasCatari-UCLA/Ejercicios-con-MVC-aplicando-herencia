export default class Cl_mFigura {
  // Propiedades con un guion bajo, un patrón común para indicar que
  // se deben usar los getters y setters para acceder a ellas.
  public _codigo: string = "";
  public _coordX: number = 0;
  public _coordY: number = 0;

  constructor({
    codigo,
    coordX,
    coordY,
  }: {
    codigo: string;
    coordX: number;
    coordY: number;
  }) {
    this.codigo = codigo;
    this.coordX = coordX;
    this.coordY = coordY;
  }

  // Setters y Getters para cada propiedad
  set codigo(codigo: string) {
    this._codigo = codigo;
  }
  get codigo(): string {
    return this._codigo;
  }

  set coordX(coordX: number) {
    this._coordX = +coordX;
  }
  get coordX(): number {
    return this._coordX;
  }

  set coordY(coordY: number) {
    this._coordY = +coordY;
  }
  get coordY(): number {
    return this._coordY;
  }

  // Métodos que serán sobreescritos por las clases hijas
  area(): number {
    return 0; // Implementación base
  }

  perimetro(): number {
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

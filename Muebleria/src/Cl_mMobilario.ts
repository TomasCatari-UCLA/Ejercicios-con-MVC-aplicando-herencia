export default class Cl_mMobilario {
    private _madera: number = 0;
    private _factura: number = 0;

    constructor({madera, factura}:{madera:number; factura:number}) {
        this.madera = madera;
        this.factura = factura;
    }

    set madera(madera:number) {
        this._madera = +madera;
    }

    get madera(): number {
        return this._madera;
    }

    set factura(factura:number) {
        this._factura = factura;
    }

    get factura(): number {
        return this._factura;
    }
    

precio(): number{
    return 0;
}

incremento(): number{
    return 0;
}


    precioM3(): number {
        if (this.madera == 1){
            return 500;
        }
        else if (this.madera == 2){
            return 300;
        }
        else return 0;
        }
        m3():number {
            return 0
        }
        
        toJSON() {
    return {
      madera: this.madera,
      factura: this.factura,
      precio: this.precio(),
      incremento: this.incremento(),
      precioM3:this.precioM3(),
      m3:this.m3(),

    };
  }
    }

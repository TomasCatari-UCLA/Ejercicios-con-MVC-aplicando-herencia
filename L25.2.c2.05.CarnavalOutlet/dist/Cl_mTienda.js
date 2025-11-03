


export default class Cl_mTienda {
    constructor(){
        this.acPrecioFinal= 0.0;
        this.cntDisfFemTallaS= 0;
        this.cntAdulFemeninas=0;
    }

    procesarDisfraz(disfraz){
        this.cntDisfraces++;
        {
          this.acPrecioFinal+= disfraz.precioFinal();
        
        
            if (disfraz.sexo === "F" && disfraz.talla === "S") {
                this.cntDisfFemTallaS++;
            }
            if(disfraz.sexo=== "F"){
                this.cntAdulFemeninas++

            }
        }
    }
    totalVendido(){
        return this.acPrecioFinal;
    }
    cantAdulFem(){
        return this.cntAdulFemeninas;
    }
    porcentajeDisfFemTallaS() {
        if (this.cntAdulFemeninas> 0) {
        return (this.cntDisfFemTallaS / this.cntAdulFemeninas) * 100;  
        } else return 0;
    }
}

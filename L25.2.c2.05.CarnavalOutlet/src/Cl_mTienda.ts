import Cl_mAdulto from "./Cl_mAdulto.js";
import Cl_mNiño from "./Cl_mNiño.js";
import Cl_mDisfraz from "./Cl_mDisfraz.js";

export default class Cl_mTienda {
    private cntDisfraces: number = 0;
    private acPrecioFinalAdulto: number=0.0;
    private acPrecioFinalNiño: number=0.;
    private cntDisfFemTallaS: number = 0;
    private cntAdulFemeninas: number=0;
    construtor(){
      this.cntDisfraces= 0;
      this.acPrecioFinalAdulto=0.0;
      this.cntDisfFemTallaS= 0;
      this.cntAdulFemeninas=0;
    }

    procesarDisfraz(disfraz: Cl_mDisfraz){
        this.cntDisfraces++;
        if(disfraz instanceof Cl_mNiño){
          this.acPrecioFinalNiño+= disfraz.precioFinal();
        }
        if (disfraz instanceof Cl_mAdulto) {
            if (disfraz.sexo === "F" && disfraz.talla === "S") {
                this.cntDisfFemTallaS++;
            }
            if(disfraz.sexo=== "F"){
                this.cntAdulFemeninas++

            }
            this.acPrecioFinalAdulto+= disfraz.precioFinal();
        }
    }
    totalVendido(): number {
        return this.acPrecioFinalAdulto+ this.acPrecioFinalNiño;
    }
    cantAdulFem():number{
        return this.cntAdulFemeninas;
    }
    porcentajeDisfFemTallaS(): number {
        if (this.cntAdulFemeninas> 0) {
        return (this.cntDisfFemTallaS / this.cntAdulFemeninas) * 100;  
        } return 0;
    }
}

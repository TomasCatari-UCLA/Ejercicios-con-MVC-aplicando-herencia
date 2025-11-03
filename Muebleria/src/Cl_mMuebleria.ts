import Cl_mMobilario from "./Cl_mMobilario.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";

export default class Cl_mMuebleria{
    private cntMobilario: number = 0;
    private cntComedor: number = 0;
    private acmPrecio: number = 0;
    private acMuebles: number = 0;
    private acComedor: number = 0;

    procesarMobilario(Mobilario: Cl_mMobilario){
        this.cntMobilario++;
        this.acmPrecio += Mobilario.precioM3();
        if (Mobilario instanceof Cl_mComedor){
            this.cntComedor++;
        }
        if(Mobilario instanceof Cl_mComedor) {
       this.acComedor+=Mobilario.precio();
        }
        if(Mobilario instanceof Cl_mMueble) {
       this.acMuebles+=Mobilario.precio();
        }
    }


    porcentajeComedor(): number{
        return (this.cntComedor / this.cntMobilario) * 100;
    }

    totalVendido(): number{
        return this.acmPrecio;
    }
    mayorVendido(): string {
        if (this.acComedor>this.acMuebles){
            return "Los comedores proporcionan mas dinero";
        } 
       else  if (this.acMuebles>this.acComedor){
        return "Los Muebles proporcionan mas dinero";
    }
   else if (this.acMuebles=this.acComedor){
        return "Tanto Muebles y Comedores son igual de vendidos";
    }
    else return ""
}

}
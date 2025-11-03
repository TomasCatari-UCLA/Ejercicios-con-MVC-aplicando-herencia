import Cl_mLaser from "./Cl_mLaser.js";
import Cl_mTinta from "./Cl_mTinta.js";
import Cl_mImpresora from "./Cl_mImpresora.js";

export default class Cl_mTienda {
    private cntLaser: number = 0;
    private cntImpresora: number=0;
    construtor(){
      this.cntLaser= 0;
      this.cntImpresora=0;
    }

    procesarImpresora(Impresora: Cl_mImpresora){
        this.cntImpresora++;
        if(Impresora instanceof Cl_mLaser){
          this.cntLaser++; }
    }
    cantidadLaser(): number {
        return this.cntLaser;
    }
    cantImpresoras():number{
        return this.cntImpresora;
    }
    porcentajeImpresoraLaser(): number {
        if (this.cntImpresora> 0) {
        return (this.cntLaser/this.cntImpresora) * 100; } 
        else return 0;
    }
}

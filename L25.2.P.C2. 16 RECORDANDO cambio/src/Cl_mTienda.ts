import Cl_mFotografia from './Cl_mFotografia.js';
import Cl_mPromocion from './Cl_mPromocion.js';

export default class Cl_mTienda {
    
    private acPrecio: number=0.0;
    private acPrecioFD: number=0.0;
    private cntFotoD: number = 0;
    private acEdicionEspecial= 0.0;
    
    constructor(){
      this.acPrecio= 0.0;
      this.acPrecioFD=0.0;
      this.cntFotoD= 0;
      this.acEdicionEspecial= 0.0;
}
    procesarPromocion(promocion: Cl_mPromocion){
        
        if(promocion instanceof Cl_mFotografia){
          if(promocion.tipoF==="D" ){
              this.acPrecioFD+= promocion.precioF();}

             if(promocion.tipoF=== "D"){
                  this.cntFotoD++;}} 
        this.acEdicionEspecial+= promocion.edicionEspecial(); 
        this.acPrecio+= promocion.precioF();
    }
    totalVendido(): number {
        return this.acPrecio;
    }
    cantFotoD():number{
        return this.cntFotoD;
    }
    subTotalFD():number{
        return this.acPrecioFD;
    }
    montoFacturaEdicionEspecial(){
        return this.acEdicionEspecial;
    }
    promedioVentasFD(): number {
        if (this.cntFotoD> 0) {
        return this.acPrecioFD/ this.cntFotoD;  
        } else return 0;
    }
}



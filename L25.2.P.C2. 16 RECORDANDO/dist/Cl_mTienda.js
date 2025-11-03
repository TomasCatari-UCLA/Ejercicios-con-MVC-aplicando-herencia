
    export default class Cl_mTienda {    
    constructor(){
      this.acPrecio= 0.0;
      this.acPrecioFD=0.0;
      this.cntFotoD= 0;
      
}
    procesarPromocion(promocion){
         if(promocion.tipoF==="D"){
              this.acPrecioFD+= promocion.precioF();}
              
              this.acPrecio+= promocion.precioF();
         
             if(promocion.tipoF=== "D"){
                  this.cntFotoD++;}}     
        
    
    totalVendido() {
        return this.acPrecio;
    }
    cantFotoD(){
        return this.cntFotoD;
    }
    subTotalFD(){
        return this.acPrecioFD;
    }
    promedioVentasFD() {
        if (this.cntFotoD> 0) {
        return this.acPrecioFD/ this.cntFotoD;  
        } else return 0;
    }
}



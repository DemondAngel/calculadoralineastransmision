import { all, create, e,pi} from "mathjs";

export default class MicrocintaBloc {

    constructor(){

        this.bigmath = create(all, {
            number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
            precision: 32        // 64 by default, only applicable for BigNumbers
          })
          
    }

    calcularImpedancia(microcinta, er){
        let z0 = 0;
        console.log(microcinta.w);
        console.log(microcinta.h);
        if(microcinta.w / microcinta.h <= 3.3){
            let x = (119.9*this.bigmath.pi) / this.bigmath.sqrt(2*(er+1));
            let y = this.bigmath.sqrt(16*this.bigmath.pow((microcinta.h/microcinta.w),2) +2);
            z0 = x*this.bigmath.log(4*(microcinta.h/microcinta.w) + y);
        }     
        else{
            let x = (119.9*this.bigmath.pi)/ (2*this.bigmath.sqrt(er));
            console.log(`Valor de x ${x}`);
            let y = ( this.bigmath.log( (e*this.bigmath.pow(this.bigmath.pi,2))/16) )/((2*this.bigmath.pi) )*((er-1)/(this.bigmath.pow(er,2)) );
            console.log(`Valor de y ${y}`);
            let z = (er + 1)/(2*this.bigmath.pi*er);
            console.log(`Valor de z ${z}`);
            let t = (this.bigmath.log(this.bigmath.pi*this.bigmath.e))/2 + this.bigmath.log( (microcinta.w/(2*microcinta.h)) + 0.94);
            console.log(`Valor de t ${t}`);
            z0 = x*this.bigmath.pow(( microcinta.w/(2*microcinta.h) + this.bigmath.log(4)/pi + y + z*t), -1);
            console.log(`Valor de z0 ${z0}`);
        }
            
        return z0;
    }

    calcularDimensiones(z0, er,f){


        if(z0 > (44-2*er)){
            let Hc = (z0*this.bigmath.sqrt(2*(er+1)) )/119.9 + (1/2)( (er-1) / (er+1))*(this.bigmath.log(this.bigmath.pi/2) + (1/er)*this.bigmath.log(4/this.bigmath.pi));
            let relation = this.bigmath.pow(this.bigmath.pow(this.bigmath.e, Hc)/8  - 1/(4*this.bigmath.pow(this.bigmath.e,Hc)),-1);
        }
        else{
            let der = 59.95*this.bigmath.pow(this.bigmath.pi,2)/z0;
            let de1 = 59.95*this.bigmath.pow(this.bigmath.pi, 2)/z0;

            let relation = (2/this.bigmath.pi)*( (der-1) - this.bigmath.log(2*de1-1) + ( (er-1)/(this.bigmath.pi*er))*(this.bigmath.log(der-1) + 0.293 - 0.517/er));
        }
            


        
    }

}
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
        if(microcinta.w / microcinta.h <= 3.3){
            let x = (119.9*this.bigmath.pi) / this.bigmath.sqrt(2*(er+1));
            let y = this.bigmath.sqrt(16*this.bigmath.pow((microcinta.h/microcinta.w),2) +2);
            z0 = x*this.bigmath.log(4*(microcinta.h/microcinta.w) + y);
        }     
        else{
            let x = (119.9*this.bigmath.pi)/ (2*this.bigmath.sqrt(er));
            let y = ( this.bigmath.log( (e*this.bigmath.pow(this.bigmath.pi,2))/16) )/((2*this.bigmath.pi) )*((er-1)/(this.bigmath.pow(er,2)) );
            let z = (er + 1)/(2*this.bigmath.pi*er);
            let t = (this.bigmath.log(this.bigmath.pi*this.bigmath.e))/2 + this.bigmath.log( (microcinta.w/(2*microcinta.h)) + 0.94);
            z0 = x*this.bigmath.pow(( microcinta.w/(2*microcinta.h) + this.bigmath.log(4)/pi + y + z*t), -1);
        }
            
        return z0;
    }

}
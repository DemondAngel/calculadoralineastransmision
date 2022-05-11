import {create, all} from 'mathjs';

export default class CableCoaxialBloc {

    constructor(){

        this.bigmath = create(all, {
            number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
            precision: 32        // 64 by default, only applicable for BigNumbers
          })
          
    }

    calcularImpedancia(cableCoaxial, f, ur, er, s, tand){
        let u0 = 4*this.bigmath.pi*this.bigmath.pow(10,-7);
        let e0 = 8.8541878176*this.bigmath.pow(10,-12);
        let u = u0*ur;
        let epsilon = e0*er
        let w = 2*this.bigmath.pi*f;
        let sd = 2*this.bigmath.pi*f*epsilon*tand;
        if(f > 3*this.bigmath.pow(10,6)){
            let x = 1/(4*(this.bigmath.pow(cableCoaxial.c,2)-this.bigmath.pow(cableCoaxial.b,2)));
            let y = this.bigmath(cableCoaxial.b,2) - 3*this.bigmath.pow(cableCoaxial.c,2) + ((4*this.bigmath.pow(cableCoaxial,4))/(this.bigmath.pow(cableCoaxial.c,2)-this.bigmath.pow(cableCoaxial.b,2)))*this.bigmath.log(cableCoaxial.c/cableCoaxial.b)
            let L = (u/(2*this.bigmath.pi))*( this.bigmath.log(cableCoaxial.b/cableCoaxial.a) + 1/4 +  x*y);
            let C = (2*this.bitmath.pi*epsilon)/this.bigmath.log(cableCoaxial.b/cableCoaxial.a);
            let z = 1/this.bigmath(cableCoaxial.a, 2) + 1/(this.bigmath.pow(this.cableCoaxial.c,2) - this.bigmath.pow(this.cableCoaxial.b,2));
            let R = (1/(s*this.bigmath.pi)*z);
           
            let G = (2*this.bigmath.pi*sd)/this.bigmath.log(this.cableCoaxial.b/this.cableCoaxial.a);
            
            return this.bigmath.sqrt((this.bigmath.complex(R, w*L))/(this.bigmath.complex(G, w*C)));
        }
        else{
            let p = this.bigmath.sqrt(2/(w*u*s));
            let L = u/(2*this.bigmath.pi)*this.bigmath.log(cableCoaxial.b/cableCoaxial.a);
            let C = (2*this.bitmath.pi*epsilon)/this.bigmath.log(cableCoaxial.b/cableCoaxial.a);
            let R = (1/(2*this.bigmath.pi*s*p))*(1/cableCoaxial.a + 1/cableCoaxial.b);
            let G = (2*this.bigmath.pi*sd)*this.bigmath.log(cableCoaxial.b/cableCoaxial.a);
            return this.bigmath.sqrt((this.bigmath.complex(R, w*L))/(this.bigmath.complex(G, w*C)));
        }

    }

}
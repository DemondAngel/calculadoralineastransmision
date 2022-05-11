import {create, all} from 'mathjs';

class LineaBifiliarBloc{
    
    constructor(){
        this.bigmath = create(all, {
            number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
            precision: 32        // 64 by default, only applicable for BigNumbers
          })
    }

    calcularImpedancia(lineabifiliar, tand, s, er, ur, f){
        let u0 = 4*this.bigmath.pi*this.bigmath.pow(10,-7);
        let e0 = 8.8541878176*this.bigmath.pow(10,-12);
        let u = ur*u0;
        let epsilon = e0*er;
        let sd = 2*this.bigmath.pi*f*epsilon*tand;
       
        let w = 2*this.bigmath.pi*f;
        if(f > 3*this.bigmath.pow(10,6)){
            let L = (u/this.bigmath.pi)*(1/4 + this.bigmath.acosh(lineabifiliar.d/(2*lineabifiliar.a)));
            let R = 2/(s*this.bigmath.pi, this.bigmath.pow(lineabifiliar.a,2));
            let C = (this.bigmath.pi*epsilon)/(this.bigmath.acosh(lineabifiliar.d/(2*lineabifiliar.a)));
            let G = (this.bigmath.pi*sd)/(this.bigmath.acosh(lineabifiliar.d/lineabifiliar.a));

            return this.bigmath.sqrt((this.bigmath.complex(R, w*L))/(this.bigmath.complex(G, w*C)));
        }
        else{
            let p = this.bigmath.sqrt(2/(w*u*s));
            let L = (u/this.bigmath.pi)*this.bigmath.log(lineabifiliar.d/lineabifiliar.a);
            let C = (this.bigmath.pi*epsilon)/this.bigmath.log(lineabifiliar.d/lineabifiliar.a);
            let R = 1/(this.bigmath.pi*lineabifiliar.a*p*s);
            let G = (this.bigmath.pi*sd)/(this.bigmath.acosh(lineabifiliar.d/(2*lineabifiliar.a)));
            return this.bigmath.sqrt((this.bigmath.complex(R, w*L))/(this.bigmath.complex(G, w*C)));
        }

    }

}
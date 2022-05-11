import React from 'react';
import { all, create } from 'mathjs';
import CableCoaxial from '../../../CableCoaxial/model/cable_coaxial';
import Microcinta from '../../../Microcinta/model/microcinta';
import LineaBifiliar from '../../../LineaBifiliar/model/linea_bifiliar';
import MicrocintaBloc from '../../../Microcinta/bloc/microcinta_bloc';
import { Formik } from 'formik';
import { SelectComponent, FieldComponent } from '../../../components/field_component';
import CableCoaxialBloc from '../../../CableCoaxial/bloc/cable_coaxial_bloc';

export default class CalculadoraScreen extends React.Component{
  
  microcinta = new Microcinta();
  cableCoaxial = new CableCoaxial();
  lineaBifiliar = new LineaBifiliar();
  

    constructor(props) {
        super(props);
        this.state = {  
          lineaTransmision: '0',
          conductivity: '0',
          dielectric: '0',
        };
        this.handleChangeLineaTransmision = this.handleChangeLineaTransmision.bind(this);
        this.handleChangeConductivity = this.handleChangeConductivity.bind(this);
        this.handleChangeDielectrics = this.handleChangeDielectrics.bind(this);
        this.calcularImpedancia = this.calcularImpedancia.bind(this);
        this.bigmath = create(all, {
          number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
          precision: 32        // 64 by default, only applicable for BigNumbers
        })

        this.conductivities = {
          "Fierro": {
            s: 1.03* this.bigmath.pow(10, 7),
            ur: 5000
          },
          "Niquel": {
            s: 1.45*this.bigmath.pow(10,7),
            ur: 600
          },
          "Laton": {
            s: 1.45*this.bigmath.pow(10,7),
            ur: 1
          },
          "Zinc": {
            s:1.67*this.bigmath.pow(10,7),
            ur: 16
          },
          "Tungsteno": {
            s:1.82*this.bigmath.pow(10,7),
            ur: 6.8
          },
          "Aluminio":{
            s:3.82*this.bigmath.pow(10,7),
            ur: 3.2
          },
          
          "Oro": {
            s:4.10*this.bigmath.pow(10,7),
            ur: 1
          },

          "Cobre": {
            s:5.80*this.bigmath.pow(10,7),
            ur: 1
          },
          "Plata": {
            s:6.17*this.bigmath.pow(10,7),
            ur: -1.6
          }
        };

        this.dielectrics = {

          "Aire": {
            er: 1.0005,
            tand: 100.0 * this.bigmath.pow(10, -3)
          },
      
          "AlcoholEtilico": {
            er: 25,
            tand: 100.0 * this.bigmath.pow(10, -3)
          },
      
          "OxidoAluminio": {
            er: 8.8,
            tand: 0.60 * this.bigmath.pow(10, -3)
          },
      
          "Baquelita": {
            er: 4.74,
            tand: 22.00 * this.bigmath.pow(10, -3)
          },
          "DioxidoCarbono": {
            er: 1.001,
            tand: 0
          },
          "Vidrio": {
            er: 7,
            tand: 2.00 * this.bigmath.pow(10, -3)
          },
          "Hielo": {
            er: 4.2,
            tand: 50.00 * this.bigmath.pow(10, -3)
          },
          "Mica": {
            er: 5.4,
            tand: 0.60* this.bigmath.pow(10, -3)
          },
          "Nylon": {
            er: 3.5,
            tand: 20.00* this.bigmath.pow(10, -3)
          },
          "Papel": {
            er: 3,
            tand: 8.00* this.bigmath.pow(10, -3)
          },
          "Plexigas": {
            er: 3.45,
            tand: 30.00 * this.bigmath.pow(10, -3)
          },
          "Polietileno": {
            er: 2.26,
            tand: 0.20 * this.bigmath.pow(10, -3)
          },
          "Poliestiereno": {
            er: 2.56,
            tand: 0.05 * this.bigmath.pow(10, -3)
          },
          "Porcelana": {
            er: 6,
            tand: 14.00 * this.bigmath.pow(10, -3)
          },
          "VidrioPyrex": {
            er: 4,
            tand: 0.60 * this.bigmath.pow(10, -3)
          },
          "Cuarzo": {
            er: 3.8,
            tand: 0.75 * this.bigmath.pow(10, -3)
          },
          "Hule": {
            er: 3,
            tand: 2.00 * this.bigmath.pow(10, -3)
          },
          "Nieve": {
            er: 3.3,
            tand: 500.00 * this.bigmath.pow(10, -3)
          },
          "TierraSeca": {
            er: 2.8,
            tand: 50.00 * this.bigmath.pow(10, -3)
          },
          "Teflon": {
            er: 2.1,
            tand: 0.30 * this.bigmath.pow(10, -3)
          },
          "MaderaSeca": {
            er: 4,
            tand: 10.00 * this.bigmath.pow(10, -3)
          },
        }
      }
    
      handleChangeLineaTransmision(event) {
        this.setState({lineaTransmision: event.target.value});
      }

      handleChangeConductivity(event){
        this.setState({conductivity: event.target.value});
      }

      handleChangeDielectrics(event){
        this.setState({dielectric: event.target.value});
      }


    getDielectric(){
      return this.dielectrics[this.state.dielectric];
    }

    getConductor(){
      return this.conductivity[this.state.conductivity];
    }

    calcularImpedancia(data){
      let dielectric = this.getDielectric();
      let conductor = this.getConductor();

      if(this.state.lineaTransmision === '1'){
        let microcintaBloc = new MicrocintaBloc();
        this.microcinta.h = data.txtH;
        this.microcinta.w = data.txtW;
        let z0 = microcintaBloc.calcularImpedancia(this.microcinta, dielectric.er);

        console.log('La impedancia es: ' + z0);
      }
      else if(this.state.lineaTransmision === '2'){

        let cableCoaxialBloc = new CableCoaxialBloc();

        let cableCoaxial = new CableCoaxial();
        this.cableCoaxial.a = data.txtA;
        this.cableCoaxial.b = data.txtB;
        this.cableCoaxial.c = data.txtC;
        let f = data.txtF;
        
        let z0 = cableCoaxialBloc.calcularImpedancia(cableCoaxial, f, conductor.ur, dielectric.er, conductor.s, dielectric.tand);
        console.log('La impedancia es: ' + z0);
      }

    }

    render(){
        return  <div><header>
        <h1>Calculadora de Líneas de Transmisión</h1>
      </header>

      <section>
        <Formik initialValues={{
            txtW: 0,
            txtH: 0,
            txtF: 0,
            txtA: 0,
            txtB: 0,
            txtC: 0,
            txtD: 0
        }} onSubmit={(values) => {
           this.calcularImpedancia(values);
          }}>
          
          {
            ({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
          
            <SelectComponent id="cmbLineaTransmision" name="Elige tu Línea de Transmisión para calcular" value={this.state.lineaTransmision}
            onChange={this.handleChangeLineaTransmision} values={['0', '1', '2', '3']}
            keys={['Seleccione una opción', 'Microcintas', 'Cables coaxiales', 'Línea bifiliar o alambres paralelos']}></SelectComponent>

            <SelectComponent id="cmbEr" name="Seleccione un material dieléctrico" value={this.state.dielectric}
            onChange={this.handleChangeDielectrics} values={['0', 'Aire', 'AlcoholEtilico', 'OxidoAluminio', 'Baquelita','DioxidoCarbono','Vidrio','Hielo','Mica','Nylon','Papel',
            'Plexigas','Polietileno','Poliestiereno','Porcelana','VidrioPyrex','Cuarzo','Hule','Nieve','TierraSeca','Teflon','MaderaSeca','1']}
            keys={['Seleccione una opción', 'Aire', 'Alcohol Etílico', 'Oxido de Aluminio','Baquelita','Dioxido de Carbono','Vidrio','Hielo','Mica','Nylon','Papel','Plexigas',
            'Polietileno','Poliestiereno','Porcelana','Vidrio Pyrex','Cuarzo','Hule','Nieve','Tierra seca','Teflon','Madera seca','Otro material']}></SelectComponent>

          { this.state.dielectric === '1' && <FieldComponent id="txtEr" type="number" name="Permitividad relativa" placeholder='Permitividad relativa' value={this.props.er} min='0' max='1000' step="0.00001"
        required={true}></FieldComponent>
          }
          <SelectComponent id="cmbConductor" name="Selecciona tu conductor:" value={this.state.conductivity}
            onChange={this.handleChangeConductivity} values={['0', 'Fierro', 'Niquel', 'Laton', 'Zinc', 'Tungsteno', 'Aluminio', 'Oro', 'Cobre', 'Plata', '1']}
            keys={['Seleccione una opción', 'Fierro (hierro)', 'Níquel', 'Latón', 'Zinc', 'Tungsteno', 'Aluminio', 'Oro', 'Cobre', 'Plata', 'Otro Material']}></SelectComponent>
          
          { this.state.conductivity === '1' && <div>
          <label htmlFor="txtS">Conductividad</label>
          <input id="txtS" placeholder='Conductividad del material' type="number" /><br/></div>
          }

{ this.state.dielectric === '1' && <FieldComponent id="txtS" type="number" name="Conductividad del material" placeholder='Conductividad del material' value={this.props.er} min='0' max='1000' step="0.00001"
        required={true}></FieldComponent>
          }
          
          { this.state.lineaTransmision === '1' ? <div id="fieldsMicrocinta">
        <FieldComponent id="txtW" type="number" name="Ancho de la cinta" placeholder='Ancho de la cinta en mm' value={values.width} min='0' max='1000' step="0.00001"
        required={true} onChange={handleChange}></FieldComponent>
        <FieldComponent id="txtH" type="number" name="Alto de la cinta" placeholder='Alto de la cinta en mm' value={values.height} min='0' max='1000' step="0.00001"
        required={true} onChange={handleChange}></FieldComponent>
      </div>
          : this.state.lineaTransmision === '2' ? <div id="fieldsCableCoaxial">
          <FieldComponent id="txtA" type="number" name="Radio a" placeholder='Radio a' value={values.a} min='0' max='1000' step="0.00001"
          required={true} onChange={handleChange}></FieldComponent>
          <FieldComponent id="txtB" type="number" name="Radio b" placeholder='Radio b' value={values.b} min='0' max='1000' step="0.00001"
          required={true} onChange={handleChange}></FieldComponent>
          <FieldComponent id="txtC" type="number" name="Radio c" placeholder='Radio c' value={values.c} min='0' max='1000' step="0.00001"
          required={true} onChange={handleChange}></FieldComponent>
        </div>:
          this.state.lineaTransmision === '3' ? <div id="fieldsLineaBifiliar">
          <FieldComponent id="txtA" type="number" name="Radio de los conductores" placeholder='Radio de los conductores' value={values.a} min='0' max='1000' step="0.00001"
          required={true} onChange={handleChange}></FieldComponent>
          <FieldComponent id="txtD" type="number" name="Distancia de separación de los conductores" placeholder='Distancia de separación de los conductores' value={values.d} min='0' max='1000' step="0.00001"
          required={true} onChange={handleChange}></FieldComponent>
        </div> : ''}
      <FieldComponent id="txtF" type="number" name="Frecuencia en Hz" placeholder='Frecuencia en Hz' value={values.f} min='0' max='1000000' step="0.00001"
        required={false}></FieldComponent>
      <FieldComponent id="txtZ" type="number" name="Impedancia Característica" placeholder='mpedancia Característica' value={this.props.z0} min='0' max='1000000' step="0.00001"
        required={false}></FieldComponent>

            <input type="button" value="Calcular a partir de dimensiones"/>
            <br/>
            <input type="submit" value="Calcular a partir de impedancia"/>
          </form>
            )
          }
        </Formik>
      </section>
      </div>
      ;
    }
}
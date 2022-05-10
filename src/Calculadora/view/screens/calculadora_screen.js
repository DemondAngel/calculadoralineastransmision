import React from 'react';

export default class CalculadoraScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: '0'
        };
    
        this.handleChange = this.handleChange.bind(this);

      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }


    render(){
        return  <div><header>
        <h1>Calculadora de Líneas de Transmisión</h1>
      </header>

      <section>
        <form>
          <label for="cmbLineaTransmision">Elige tu Línea de Transmisión para calcular</label>
          <select id="cmbLineaTransmision" value={this.state.value} onChange={this.handleChange}>
            <option value="0">Seleccione una opción</option>
            <option value="1">Microcintas</option>
            <option value="2">Cables coaxiales</option>
            <option value="3">Línea bifiliar o alambres paralelos</option>
          </select>
          <br/>
            
          <br/>
          <label for="cmbEr">Seleccione un material dieléctrico</label>
          <select id="cmbEr">
            <option value="0">Selecciona una opción</option>
            <option value="1">Aire</option>
            <option value="2">Aire</option>
            <option value="3">Óxido de aluminio</option>
            <option value="4">Baquelita</option>
            <option value="5">Dióxido de carbono</option>
            <option value="6">Vidrio</option>
            <option value="7">Hielo</option>
            <option value="8">Mica</option>
            <option value="9">Nylon</option>
            <option value="10">Papel</option>
            <option value="11">Plexigas</option>
            <option value="12">Polietileno</option>
            <option value="13">Poliestiereno</option>
            <option value="14">Porcelana</option>
            <option value="15">Vidrio Pyrex</option>
            <option value="16">Cuarzo</option>
            <option value="17">Hule</option>
            <option value="18">Nieve</option>
            <option value="19">Tierra seca</option>
            <option value="20">Teflón</option>
            <option value="21">Madera seca</option>
            <option value="22">Otro material</option>
          </select>
          <br/>
          <h3>En caso de que tu material no este en las opciones anteriores, por favor indica la premitividad relativa de tu material</h3>
          <label for="txtEr">Permitividad relativa</label>
          <input id="txtEr" placeholder='Permitividad relativa del material' type="number" />
          <br/>
          <label for="cmbConductor">Selecciona tu conductor:</label>
          <select id="cmbConductor">
            <option value="0">Selecciona una opción</option>
            <option value="1">Fierro (hierro)</option>
            <option value="2">Níquel</option>
            <option value="3">Latón</option>
            <option value="4">Zinc</option>
            <option value="5">Tungsteno</option>
            <option value="6">Aluminio</option>
            <option value="7">Oro</option>
            <option value="8">Cobre</option>
            <option value="9">Plata</option>
            <option value="10">Otro material</option>
          </select>
          <label for="txtZ">Impedancia característica</label>
            <input type="number" placeholder='Impedancia Característica' id="txtZ"></input>

            <input type="submit" value="Calcular a partir de dimensiones"/>
            <input type="submit" value="Calcular a partir de impedancia"/>
          </form>
      </section>
      </div>
      ;
    }
}
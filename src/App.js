import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calculadora de Líneas de Transmisión</h1>
      </header>

      <section>
        <form>
          <label for="cmbLineaTransmision">Elige tu Línea de Transmisión para calcular</label>
          <select id="cmbLineaTransmision">
            <option value="0">Seleccione una opción</option>
            <option value="1">Microcintas</option>
            <option value="2">Cables coaxiales</option>
            <option value="3">Línea bifiliar o alambres paralelos</option>
          </select>
          <br/>
          <div id="formDivMicrocinta">
            <label for="txtW">Ancho de la cinta</label>
            <input type="number" placeholder='Ancho de la cinta en mm' id="txtW"/>
            <br/>
            <label for="txtH">Alto de la cinta</label>
            <input type="number" placeholder="Alto de la cinta en mm" id="txtH"/>
            <br/>
          </div>

          <div id="formDivCableCoaxial">
            <label for="txtA">Radio interno (a)</label>
            <input type="number" placeholder="Radio interno en mm" id="txtA"/>
            <br/>
            <label for="txtB">Radio externo (b)</label>
            <input type="number" placeholder="Radio externo en mmm" id="txtB"/>
            <br/>
            <label for="txtC">Radio externo (c) (opcional)</label>
            <input type="number" placeholder="Radio externo en mm" id="txtC" />
          </div>

          <div id="formDivLineaBifiliar">
            <label for="txtD">Distancia d en mm</label>
            <input type="number" id="txtD" placeholder="Distancia d en mm" />
            <br/>
            <label for="txtAa">Distancia a en mm</label>
            <input type="number" id="txtAa" placeholder="Distancia a en mm" />
          </div>

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
        </form>
      </section>
      <label for="txtZ">Impedancia característica</label>
      <input type="number" placeholder='Impedancia Característica' id="txtZ"></input>
    </div>
  );
}

export default App;

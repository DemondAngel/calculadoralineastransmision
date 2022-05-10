import React from "react";

export default class FieldsLineaBifiliar extends React.Component{
    
    render(){
        return <div id="divLineaBifiliar">
        <label for="txtD">Distancia d en mm</label>
        <input type="number" id="txtD" placeholder="Distancia d en mm" />
        <br/>
        <label for="txtAa">Distancia a en mm</label>
        <input type="number" id="txtAa" placeholder="Distancia a en mm" />
      </div>;
    }

}
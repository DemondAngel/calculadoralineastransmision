import React from "react";

export default class FieldsMicrocinta extends React.Component{
    render(){
        return <div id="fieldsMicrocinta">
        <label for="txtW">Ancho de la cinta</label>
        <input type="number" placeholder='Ancho de la cinta en mm' id="txtW"/>
        <br/>
        <label for="txtH">Alto de la cinta</label>
        <input type="number" placeholder="Alto de la cinta en mm" id="txtH"/>
        <br/>
      </div>;
    }
}
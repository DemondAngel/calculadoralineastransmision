import React from "react";

export default class FieldCableCoaxial extends React.Component{

    renderer(){
        return <div id="fieldsCableCoaxial">
        <label for="txtA">Radio interno (a)</label>
        <input type="number" placeholder="Radio interno en mm" id="txtA"/>
        <br/>
        <label for="txtB">Radio externo (b)</label>
        <input type="number" placeholder="Radio externo en mmm" id="txtB"/>
        <br/>
        <label for="txtC">Radio externo (c) (opcional)</label>
        <input type="number" placeholder="Radio externo en mm" id="txtC" />
      </div>;
    }

}
import React, { useState } from "react";
import '../css/style.css'


function Item (){
    return (
        <div className="itens">
        <ol type="1">
          <span>Itens</span>
          <li><input type="text" value="Arroz" /></li>
          <li><input type="text" value="Feijão" /></li>
          <li><input type="text" value="Roupa" /></li>
        </ol>

        <div className="metas">
        <span>Meta</span>
        <ol type="1">
          <li><input type="number" /></li>
          <li></li>
          <li></li>
        </ol>
        </div>
      </div>
    );
}
export default Item;
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    function fornercerInfo(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }
  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho quandoclicar={fornercerInfo}>  </IndiretaFilho>
    </div>
  );
};

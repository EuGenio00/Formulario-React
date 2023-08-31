import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {
  // console.log(props)
  // let valor = "Eugenio";

  const [valor, setValor] = useState("");

  const aoDigitar = (evento) => {
    setValor(evento.target.value);
    console.log(valor);
  }

  return (
    <div className="container" >
      {/* <h1>Digite os dados para o formulário</h1> */}
    <div className="campoTextoContent">
      <div className="campoTexto">
        <label id="name">{props.label}</label>
        <input 
        value={valor}
        onChange={aoDigitar} 
        required={props.eObrigatorio} 
        placeholder={props.placeholder}/>
      </div>
    </div>
    </div>
  )
};

export default CampoTexto;
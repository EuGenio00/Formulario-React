// import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {

  const aoDigitar = (evento) => {
   props.aoAlterar(evento.target.value);
  }

  return (
    <div className="container" >
      {/* <h1>Digite os dados para o formulário</h1> */}
    <div className="campoTextoContent">
      <div className="campoTexto">
        <label id="name">{props.label}</label>
        <input 
        value={props.valor} //nome, cargo, imagem
        onChange={aoDigitar} 
        required={props.eObrigatorio} 
        placeholder={props.placeholder}/>
      </div>
    </div>
    </div>
  )
};

export default CampoTexto;
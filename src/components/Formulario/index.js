import CampoTexto from "../CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';
import Botao from "../Button";
import { useState } from "react";

const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoEnviar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado([
      nome, cargo, imagem, time
    ]);
    console.log("O botao foi carregado :D");
  }

  // const aoAlterarNome = (valor) => {
  //   setNome(valor);
  // }

  // const aoAlterarCargo = (valor) => {
  //   setCargo(valor);
  // }

  // const aoAlterarImagem = (valor) => {
  //   setImagem(valor);
  // }

  return (
    <div className="formContent">
      <h1>Formulário para acesso: </h1>
      <form onSubmit={aoEnviar}>

      <CampoTexto 
      eObrigatorio={true} 
      label="Nome" 
      placeholder="Digite seu nome: " 
      valor={nome} 
      aoAlterar={valor => setNome(valor)}/>

      <CampoTexto 
      eObrigatorio={true} 
      label="Cargo" 
      placeholder="Digite seu cargo: " 
      valor={cargo} 
      aoAlterar={valor => setCargo(valor)}/>

      <CampoTexto 
      eObrigatorio={true} 
      label="Imagem" 
      placeholder="Digite sua imagem: " 
      valor={imagem} 
      aoAlterar={valor => setImagem(valor)}/>

      <ListaSuspensa 
      eObrigatorio={true} 
      label="Times" 
      itens = {props.times} valor={time} 
      aoAlterar={valor => setTime(valor)}/>
      <Botao textoBotao= "Enviar"/>
    </form>
    </div>
  )
}

export default Formulario;
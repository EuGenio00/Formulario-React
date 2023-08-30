import CampoTexto from "../CampoDeTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';
import Botao from "../Button";

const Formulario = () => {

  const times = [
    'Pedagógica',
    'Administrativa',
    'Instrutores',
    'Coordenação',
    'Discentes'
  ]

  const aoEnviar = (evento) => {
    evento.preventDefault();
    console.log("O botao foi carregado :D")
  }

  return (
    <div className="formContent">
      <form onSubmit={aoEnviar}>
      <CampoTexto label="Nome" placeholder="Digite seu nome: "/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo: "/>
      <CampoTexto label="Imagem" placeholder="Digite sua imagem: "/>
      <ListaSuspensa itens = {times}/>
      <Botao textoBotao= "Enviar"/>
    </form>
    </div>
  )
}

export default Formulario;
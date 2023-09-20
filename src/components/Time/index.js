import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

  // const css = {backgroundColor: props.corFundo}

  return(
    props.colaboradores.length > 0 ? 

    <section className='time' style={{backgroundColor: props.corFundo}}>
      <h3>{props.tituloNome}</h3>
      {props.colaboradores.map(colaborador => <Colaborador
      key={colaborador.nome}
      imagem={colaborador.imagem}
      nome={colaborador.nome}
      cargo={colaborador.cargo} 
      />)}
    </section>
    : ''
  )
};

export default Time;
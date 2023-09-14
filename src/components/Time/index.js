import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
  // const css = {backgroundColor: props.corFundo}
  return(
    <section className='time' style={{backgroundColor: props.corFundo}}>
      <h3>{props.tituloNome}</h3>
      <Colaborador 
      photo={'https://github.com/Eugenio00.png'}
      nomeColaborador="Eugénio Mateus"
      cargoColaborador="Discente"/>
    </section>
  )
};

export default Time;
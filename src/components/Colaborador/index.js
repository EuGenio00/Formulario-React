import './Colaborador.css'

const Colaborador = (props) => {
  return(
    <div className='colaborador'>
      <div className='cabecalho'>
        <img src={props.photo} alt='Foto do colaborador'/>
      </div>
      <div className='rodape'>
        <h4>{props.nomeColaborador}</h4>
        <h5>{props.cargoColaborador}</h5>
      </div>
    </div>
  )
};

export default Colaborador;
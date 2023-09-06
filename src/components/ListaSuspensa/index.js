import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  console.log(props.itens);

  const aoSelecionar = (evento) => {
    props.aoAlterar(evento.target.value)
  }
  return(
    <div className="listaSuspensa">
      <label>Time</label>
      <select 
      onChange={aoSelecionar} 
      value={props.valor}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa;
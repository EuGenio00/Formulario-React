import './CampoTexto.css'

const CampoTexto = (props) => {
  console.log(props)
  return (
    <div className="container" >
      {/* <h1>Digite os dados para o formulário</h1> */}
    <div className="campoTextoContent">
      <div className="campoTexto">
        <label id="name">{props.label}</label>
        <input placeholder={props.placeholder}/>
      </div>
    </div>
    </div>
  )
};

export default CampoTexto;
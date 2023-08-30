import './Button.css';


const Botao = (children) => {
  return (
    <div className="botaoContent">
      <button className="botao" type="submit">{children.textoBotao}</button>
    </div>
  )
}

export default Botao;
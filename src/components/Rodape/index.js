
import './Rodape.css';

const Rodape = (props) => {
  return(
    <section className='footer'>
      <ul>
        <li>
          <a href='https://twitter.com' target="_blank" rel="noreferrer">
            <img src='/imagens/tw.png' alt='icone Twitter' />
          </a>
        </li>
        <li>
          <a href='https://facebook.com' target="_blank" rel="noreferrer">
            <img src='/imagens/fb.png' alt='icone Facebook' />
          </a>
        </li>
        <li>
          <a href='https://instagram.com' target="_blank" rel="noreferrer">
            <img src='/imagens/ig.png' alt='icone Instagram' />
          </a>
        </li>
      </ul>
      <div className='footer-logo'>
        <div className='logo'>
          <img src='/imagens/senai-logo-1.png' alt='logo Senai do footer'/>
        </div>
        <p>Desenvolvido por: <span>{props.desenvolvedor}</span></p>
      </div>
    </section>
  );
};


export default Rodape;
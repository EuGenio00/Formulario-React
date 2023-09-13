
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {nome: 'Pedagógica',
    corFundo: '#5b9bd5'
    },
    {nome: 'Administrativa',
    corFundo: '#e7e6e6'
    },
    {nome: 'Instrutores',
    corFundo: '#5b9bd5'
    },
    {nome: 'Coordenação',
    corFundo: '#e7e6e6'
    },
    {nome: 'Discentes',
    corFundo: '#5b9bd5'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(...colaboradores);
    setColaboradores([...colaboradores, colaborador]);
  }

  return ( 
    <div className="App">
      <Banner />
      <Formulario 
      aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time tituloNome= "Pedagógica"/>
      <Time tituloNome= "Coordenação"/>
      <Time tituloNome= "Administrativa"/>
      <Time tituloNome= "Instrutores"/>
      <Time tituloNome= "Discentes"/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {nome: 'Selecionar'
    // corFundo: '#ffffff'
    },
    {nome: 'Pedagógica',
    corFundo: '#5b9bd5'
    },
    {nome: 'Administrativa',
    corFundo: 'rgba(238, 141, 18, 0.29)'
    },
    {nome: 'Instrutores',
    corFundo: '#5b9bd5'
    },
    {nome: 'Coordenação',
    corFundo: 'rgba(238, 141, 18, 0.29)'
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
      times={times.map(time => time.nome)}
      aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      key={time.nome} 
      tituloNome={time.nome} 
      corFundo={time.corFundo} />)}

       <Rodape desenvolvedor="Eugénio"/>
    </div>
   
  );
}

export default App;

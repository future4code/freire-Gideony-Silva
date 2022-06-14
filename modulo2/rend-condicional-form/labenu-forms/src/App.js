import './App.css';
import styled from 'styled-components'
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


const Centering = styled.div`	
	text-align: center;
`

export class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    // eslint-disable-next-line default-case
    switch (this.state.etapa) {
        case 1: 
          return <Etapa1 />; 
        case 2: 
          return <Etapa2 />;
        case 3: 
          return <Etapa3 />;
        case 4: 
          return <Final />;
    }
  }


  ProximaEtapa = () => {
    this.setState ({etapa:this.state.etapa + 1})    
  }


  render() {
    return (
          <div>
            <Centering>
            {this.renderizaEtapa()}
            {this.state.etapa ===4 ? (null) : <button onClick={this.ProximaEtapa}>Próxima Etapa</button> }
            </Centering>
          </div>
        );
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';
import img from './img/Wallpaper.jpg';

const AppContainer = styled.div`
  
 // background-color: lightgreen;
  height: 95vh;
  width: 50vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  
`

const MensagensContainer = styled.div`
  background-image: url(${img});
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  color: white;
`

const InputsContainer = styled.div`
  display: flex;
  padding: 0.5em 0.9em;

`

const NomeImput = styled.input`
  width: 100px;
  padding: 0.9em 0.8em;
  border-radius: 0.3em;
  line-height: 1.3;

`

const MensagemImput = styled.input`
  flex-grow: 1;
  padding: 0.9em 0.8em;
  border-radius: 0.3em;
  line-height: 1.3;

`


class App extends React.Component {
  state = {
    mensagens: [],
    usuarioValue: '',
    mensagemValue: ''
  }

  onChangeUsuarioValue = (event) => {
    this.setState({usuarioValue: event.target.value})
  }

  onChangeMensagemValue = (event) => {
    this.setState({mensagemValue: event.target.value})
  }

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuarioValue,
      texto: this.state.mensagemValue
    }

    const novasmensagensArray = [novaMensagem, ...this.state.mensagens]

    this.setState({mensagens: novasmensagensArray})
  }

  render() {
    return (
      <AppContainer>

        <MensagensContainer>
          {this.state.mensagens.map((mensagem) => {
            return <p>
              <strong>{mensagem.usuario}</strong>: {mensagem.texto}
            </p>
          })}
        </MensagensContainer>

        <InputsContainer>

          <NomeImput
            onChange={this.onChangeUsuarioValue} 
            value={this.state.usuarioValue} 
            placeholder={'Nome'}
          />

          <MensagemImput
            onChange={this.onChangeMensagemValue} 
            value={this.state.mensagemValue} 
            placeholder={'Mensagem'}
          />

          <button onClick={this.enviarMensagem}>Enviar</button>

        </InputsContainer>

      </AppContainer>
    );
  }
}

export default App;
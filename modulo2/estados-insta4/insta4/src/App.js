import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    post: [ 
      { nomeUsuario: 'ana liz', 
      fotoUsuario: 'https://picsum.photos/50/40', 
      fotoPost: 'https://picsum.photos/200/110' },

      { nomeUsuario: 'juliana', 
      fotoUsuario: 'https://picsum.photos/50/50', 
      fotoPost: 'https://picsum.photos/200/120' },

      { nomeUsuario: 'vitor', 
      fotoUsuario: 'https://picsum.photos/50/30', 
      fotoPost: 'https://picsum.photos/200/150' }
    ]

   
  }

  adicionaPost = () => {

   const valorPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: 'https://picsum.photos/50/30',
      fotoPost: 'https://picsum.photos/200/150'
    } 

    const copyListPost = [...this.state.post, valorPost]
      this.setState({post:copyListPost}) 

  };

  onChangeInputNome = (event) => {this.setState({valorPost: {nomeUsuario: event.target.value}});}
  onChangeInputFoto = (event) => {this.setState({valorPost: {fotoUsuario: event.target.value}});}
  onChangeInputPost = (event) => {this.setState({valorPost: {fotoPost: event.target.value}});}


  render() {
    const listComponentPost = this.state.post.map((obj) => {
      return (
        <Post nomeUsuario={obj.nomeUsuario}
              fotoUsuario={obj.fotoUsuario} 
              fotoPost={obj.fotoPost} 
        />
      )
    });

    return (
      <MainContainer>

      <input
            
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

        <button onClick={this.adicionaPost}>Adicionar</button>
      <div>{listComponentPost}</div>

      </MainContainer>
    );
  }
}

export default App;
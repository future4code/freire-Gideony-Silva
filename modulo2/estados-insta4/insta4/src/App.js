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

      <div>{listComponentPost}</div>

      </MainContainer>
    );
  }
}

export default App;
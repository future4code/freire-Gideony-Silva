import axios from "axios"
import React from "react"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  gap: 30px;
  background-color: #313031;
  color: white;
  border-radius: 10px;
  border: 1px solid red;
`

const Botao = styled.button`
  color: black;
  padding: 10px;
  border-radius: 5px;
  background-color: #f5fffa;
  border: 2px solid red;
`

const headers = {
  headers: {
    Authorization: "gideony-ewerton-freire"
  }
}

export default class DetalhesUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  }

  componentDidMount = () => {
    this.getUserById()
  }

  getUserById = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios
      .get(url, headers)
      .then((response) => {
          console.log(response.data.name)
          this.setState({
            nome: response.data.name,
            email: response.data.email
          })
        })
      .catch((error) => {
        console.log(error.message)
      })
  }

  render() {
    return (
      <ContainerPrincipal>
        <h2>Detalhes do Usuário</h2>
        <div>
          <h3>Dados confidenciais</h3>
          <p>{this.state.nome}</p>
          <p>{this.state.email}</p>
        </div>
        <Botao onClick={this.props.verUsuario}>Voltar</Botao>
      </ContainerPrincipal>
    )
  }
}

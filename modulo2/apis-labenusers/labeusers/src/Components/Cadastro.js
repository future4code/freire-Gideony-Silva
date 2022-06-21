import axios from "axios"
import React from "react"
import styled from "styled-components"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  min-height: 300px;
  width: 300px;
  border: 1px solid red;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #454545;
  color: white;
  
`
const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

const Campo = styled.div`

  display: flex;
  gap: 10px;
  justify-content: space-between;

  input {
    width: 200px;
    height: 28px;
    border-radius: 5px;
  }
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  button {
    color: black;
    padding: 10px;
    border-radius: 5px;
    background-color: #f5fffa;
  }
`

const headers = {
  headers: {
    Authorization: "gideony-ewerton-freire"
  }
}

class Cadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
  }

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        headers
      )
      .then((response) => {
        alert("Usuario Cadastrado com sucesso!");
        this.setState({
          inputNome: "",
          inputEmail: "",
        });
      })
      .catch((error) => {
        alert("Nenhum Usuario cadastrado. Tente novamente.");
      });
  };

  onChangeNome = (event) => {
    this.setState({
      inputNome: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    })
  }

  render() {
    return (
      <ContainerPrincipal>
        <h2>Faça seu Cadastro</h2>

        <ContainerInputs>
          <Campo>
            <label>Nome:</label>
            <input value={this.state.inputNome} onChange={this.onChangeNome} />
          </Campo>
          <Campo>
            <label>Email:</label>
            <input value={this.state.inputEmail} onChange={this.onChangeEmail} />
          </Campo>
        </ContainerInputs>

        <ContainerBotoes>
          <button onClick={this.createUser}>Cadastrar</button>
          <button onClick={this.props.irParaLista}>Ver usuários</button>
        </ContainerBotoes>
      </ContainerPrincipal>
    );
  }
}

export default Cadastro;

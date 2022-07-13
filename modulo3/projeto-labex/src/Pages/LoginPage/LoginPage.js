import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import { ContainerLogin, DivInputs, Botoes, ContainerMainLogin, DivCardLogin} from './styleLoginPage';



function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/")
  }

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list")
  }

  const logIn = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/login"
    const body = {
      email: email,
      password: password
    };
    axios.post(url, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToAdminHomePage()
      })
      .catch((error) => {
        console.log("Deu ruim: ", error.response)
      })

  }
  return (
    <ContainerMainLogin>
      <Header />
      
      <DivCardLogin>
        <ContainerLogin>
          <h1>Faça seu Login</h1>
          <DivInputs>

            <input
              placeholder='Email'
              type="email"
              onChange={onChangeEmail}
              value={email}
            />
            <input
              placeholder='Password'
              type="password"
              onChange={onChangePassword}
              value={password}
            />

          </DivInputs>

          <Botoes>
            <button onClick={goBack}>
              <span>Voltar</span>
            </button>
            <button onClick={logIn} >
              <span>Acessar</span>
            </button>
          </Botoes>

        </ContainerLogin>
      </DivCardLogin>

    </ContainerMainLogin>
  )
}

export default LoginPage
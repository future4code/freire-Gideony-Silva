import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContainerPai, DivCardHome, BlocoFoto, Botoes } from './styleHomePage'


function HomePage() {
  const navigate = useNavigate();

  const goTripsList = () => {
    navigate("/trips/list")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }

  return (
    <ContainerPai>
      <DivCardHome>

        <BlocoFoto>
          <p>LabeX</p>
        </BlocoFoto>

        <Botoes>

          <button onClick={goTripsList}>
            <span>Viagens</span>
          </button>

          <button onClick={goToLoginPage}>
            <span>Login</span>
          </button>

        </Botoes>
      </DivCardHome>

    </ContainerPai>
  )
}

export default HomePage
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header'
import axios from 'axios'
import { Botao, DivDoMap, MainContainer, TripsDiv, ContainerButtons } from './styleListTripsPage'




function ListTripsPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const goToAplicationForm = () => {
    navigate("/trips/application")
  }

  const [trips, setTrips] = useState([])

  const getTripsList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips"
    axios.get(url)
      .then((response) => {
        setTrips(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu ruim:", error.response)
      })
  }

  useEffect(() => {
    getTripsList();
  }, []);

  const listTrips = trips.map((trip) => {
    return (
      <DivDoMap>
        <div>
          <p>Nome: {trip.name}</p>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays}</p>
          <p>Data: {trip.date}</p>
        </div>
      </DivDoMap>
    )
  });

  return (
    <MainContainer>
      <Header />
      <ContainerButtons>
        <Botao>
          <button onClick={goBack}>
            <span>Voltar</span>
          </button>
        </Botao>

        <Botao>
          <button onClick={goToAplicationForm}>
            <span>Inscreva-se!</span>
          </button>
        </Botao>
      </ContainerButtons>
      <h1>Lista de viagens disponíveis:</h1>
      <TripsDiv>

        {listTrips}

      </TripsDiv>

    </MainContainer>
  )
}

export default ListTripsPage
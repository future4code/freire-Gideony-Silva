import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import useProtectedPage from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Botoes, CandidatesButton, DivTripInfo, ApprovedCandidates, DivMap, DivInfo,  DivAprovados, MainContainer } from './styleTripDetailsPage'

function TripDetailsPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const params = useParams();
  

  const [candidates, setCandidates] = useState([]);
  const [tripDetail, setTripDetail] = useState([]);


  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trip/${params.id}`
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.get(url, headers)
      .then((response) => {
        setTripDetail(response.data.trip);
        setCandidates(response.data.trip.candidates);
        console.log(response.data.trip.candidates)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }, []);

  const decideCandidate = (id, choice) => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips/${tripDetail.id}/candidates/${id}/decide`
    const body = {
      approve: choice
    }
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.put(url, body, headers)
      .then((response) => {
        console.log(response)
        if (choice === true) {
          alert("Candidato aprovado.")
        } else {
          alert("Candidato reprovado.")
        }
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }



  const remainingCandidates = candidates.map((candidate) => {
    return (
      <DivMap key={candidate.id}>
        <p>Nome: {candidate.name} </p>
        <p>Idade: {candidate.age} </p>
        <p>País: {candidate.country} </p>
        <p>Profissão: {candidate.profession} </p>
        <p>Texto de aplicação: {candidate.applicationText} </p>
        <CandidatesButton>
          <Botoes>
          <button onClick={() => decideCandidate(candidate.id, true)} > Aprovar </button>
          <button onClick={() => decideCandidate(candidate.id, false)}> Reprovar </button>
          </Botoes>
        </CandidatesButton>
      </DivMap>
    )
  })

  const approvedCandidates = tripDetail.approved && tripDetail.approved.map((candidate) => {
    return (
      <DivAprovados key={candidate.id}> {candidate.name} </DivAprovados>
    )
  })

  return (

    <MainContainer>
      <Header />
      <DivInfo>
      <div>
        <h1>Detalhes da viagem:</h1>
        <DivTripInfo>
          <p><b>Nome:</b> {tripDetail.name}</p>
          <p><b>Planeta:</b> {tripDetail.planet}</p>
          <p><b>Descrição:</b> {tripDetail.description}</p>
          <p><b>Data:</b> {tripDetail.date}</p>
          <p><b>Duração em dias:</b> {tripDetail.durationInDays}</p>
        </DivTripInfo>
      </div>

      <di>
        <h3>Candidatos pendentes:</h3>
        <div>
          {remainingCandidates}
        </div>
      </di>

      <ApprovedCandidates>
        <h3>Candidatos aprovados:</h3>
        <div>
          {approvedCandidates}
        </div>
      </ApprovedCandidates>

      <Botoes>
        <button onClick={goBack}>
          <span>Voltar</span>
        </button>
      </Botoes>

      </DivInfo>

    </MainContainer>
  )
}

export default TripDetailsPage
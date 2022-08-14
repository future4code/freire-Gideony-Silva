import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { Botoes, ContainerPai, DivGeral, DivMap, ContainerLista } from './styleAdminPage';




function AdminHomePage() {
  useProtectedPage();

  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const getTripDetail = (id) => {
    navigate(`/admin/trips/${id}`)
  }

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create")
  }

  const goBack = () => {
    navigate(-1)
  }


  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips"
    axios.get(url)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert("Deu ruim: ", error.data.response);
      });
  }, []);



  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips/${id}`;
    const headers = {
      headers: {
          auth: token
      }   
     }
    axios.delete(url, headers)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response.data)
      })

  }



  const tripList = trips.map((trip) => {
    return (
      <DivMap key={trip.id} >
        <div onClick={() => getTripDetail(trip.id)} >{trip.name}</div>
        <button onClick={() => deleteTrip(trip.id)}> X </button>
      </DivMap>
    )
  })

  return (
    <ContainerPai>
      <Header />
      <DivGeral>
        
        <ContainerLista>
        <h1> Área Administrativa</h1>
          {tripList}
        </ContainerLista>
        <Botoes>
          <button onClick={goBack}>
            <span>Voltar</span>
          </button>
          <button onClick={goToCreateTripPage}>
            <span>Criar viagem</span>
          </button>
        </Botoes>
      </DivGeral>
    </ContainerPai>
  )
}

export default AdminHomePage
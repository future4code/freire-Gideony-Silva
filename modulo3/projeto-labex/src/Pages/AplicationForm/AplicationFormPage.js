import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header';
import { Botao, FormsContainer, DivCover, ContainerMainApplication } from './styledAplicationPage'
import useForm from '../../Hooks/useForm';
import axios from 'axios';
import { Countries } from '../../Constants/countries'


function AplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const [trips, setTrips] = useState([]);

  const { form, onChange, cleanFields } = useForm({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  })

  const register = (event) => {
    event.preventDefault();
    applyToTrip();
    console.log("Enviado!", form);
    cleanFields();
  }

  useEffect(() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips"
    axios.get(url)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert("Deu ruim: ", error.data.response);
      });
  }, []);

  const applyToTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips/:id/apply`
    const body = {
      "name": form.name,
      "age": form.age,
      "applicationText": form.applicationText,
      "profession": form.profession,
      "country": form.country,
    }
    axios.post(url, body)
      .then((response) => {
        alert("Inscrição realizada com sucesso!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
        alert("Algo deu errado: ", error.response)
      })
  }

  const getTripsList = trips.map((trip) => {
    return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

  const countryOptions = Countries.map((country) => {
    return (
      <option value={country} key={country} >{country}</option>
    )
  })


  return (

    <ContainerMainApplication>
      <Header />

      <DivCover>
        <FormsContainer onSubmit={register}>
          <select
            value={form.escolhaViagem}
            name={"escolhaViagem"}
            onChange={onChange}>
            <option value='' disabled>Escolha a sua viagem</option>
            {getTripsList}
          </select>

          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Digite seu nome completo"
            required
          />

          <input
            name={"age"}
            value={form.age}
            onChange={onChange}
            placeholder="Digite sua idade"
            required
            type={"number"}
            min={18}
          />

          <input
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            placeholder="Por que deve ser escolhido?"
            required
          />

          <input
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            placeholder="Profissão"
            required
          />

          <select
            name={"country"}
            value={form.country}
            onChange={onChange}
            placeholder="País"
            required
          >
            <option value='' disabled> Escolha o seu País</option>
            {countryOptions}
          </select>


          <Botao>
            <button>
              <span>Enviar!</span>
            </button>
          </Botao>

        </FormsContainer>
        
          <Botao>
            <button onClick={goBack}>
              <span>Voltar</span>
            </button>
          </Botao>
        
      </DivCover>




    </ContainerMainApplication>

  )
}

export default AplicationFormPage
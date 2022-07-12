import React from 'react'
import Header from '../../Components/Header'
import { Botoes, FormsContainer, DivCover, ContainerMainApplication } from './styleCreateTripPage'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../../Hooks/useProtectedPage'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { Planets } from '../../Constants/planets'


function CreateTripPage() {
  useProtectedPage();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const createNewTrip = (event) => {
    event.preventDefault();
    createTrip();
    cleanFields();
  }

  const createTrip = () => {

    const HEADERS = {
      headers: {
        "Content-Type": "application/json",
        "auth": localStorage.getItem("token")
      }
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gideony-ewerton-freire/trips",
        form, HEADERS
      )
      .then((response) => {
        alert("Viagem cadastrada com sucesso!");
        navigate("/admin/trips/list/");
      })
      .catch((error) => {
        cleanFields();
      });

  }

  const planetsAvailable = Planets.map((planets) => {
    return <option key={planets} value={planets} > {planets} </option>
  })

  return (
    <ContainerMainApplication>
      <Header />
      <DivCover>
        <FormsContainer onSubmit={createNewTrip} >
          <input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Digite o nome da viagem"
            required
          />

          <select
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            placeholder="Planeta"
            required
          >
            <option value="" disabled> Escolha o planeta</option>
            {planetsAvailable}
          </select>

          <input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder="Data"
            type={"date"}
            required
          />

          <input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder="Descrição da viagem"
            required
          />

          <input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            type={"number"}
            placeholder="Digite a duração da viagem em dias"
            required
          />

          <Botoes>
            <button>
              <span>Criar!</span>
            </button>
          </Botoes>

        </FormsContainer>
        <Botoes>
          <button onClick={goBack}>
            <span>Voltar</span>
          </button>
        </Botoes>
      </DivCover>

    </ContainerMainApplication>
  )
}

export default CreateTripPage
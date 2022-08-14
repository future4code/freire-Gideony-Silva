import styled from "styled-components";

export const MainContainer = styled.div`
  h1, h3{
    color: black;
    text-align: center;
  }
`
export const DivInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ApprovedCandidates = styled.div`
background-color: black;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
border-radius: 15px;
  h3 {
    color: white;
  }
`



export const DivTripInfo = styled.div`
background-color: black;
color: white;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
border-radius: 15px;
`

export const DivAprovados = styled.div`

`

export const DivMap = styled.div`
background-color: black;
border: 2px solid red;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
border-radius: 15px;

`

export const CandidatesButton = styled.div`
display: flex;
justify-content: center;
`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 20px;
width: 20vw;
padding-bottom: 10px;

button {
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content:space-evenly;

 font-weight: 500;
 font-size: 17px;
 padding: 0.8em 1.3em 0.8em 0.9em;
 color: white;
 background: #262626;
 border: none;

 border-radius: 10px;
}
`
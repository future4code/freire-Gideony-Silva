import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const DivPai = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    background-color:lightgray;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-right: 30px;
    
`

const HeaderLogo = styled.div`
display: flex;
flex-direction: row;
`


const Botao = styled.div`
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

export default function Header() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    }

  return (
    <DivPai>
        <HeaderLogo>
            <h2>LabeX</h2>
        </HeaderLogo>
        
        <Botao>
          <button onClick={goToHomePage}>
            <span>Home</span>
          </button>
        </Botao>
        
    </DivPai>
  )
}

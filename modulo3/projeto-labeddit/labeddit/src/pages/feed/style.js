import styled from 'styled-components'

export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    
    gap:15px;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    padding-bottom: 30px;
    @media screen and (min-device-width : 800px) and (max-device-width : 1024px) {
        width: 70%;
        margin:auto
    }
    @media screen and (min-device-width : 1025px){
        width: 40%;
        margin:auto
    }
`

export const CreatePostArea = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    
`

export const Hr = styled.div`
  background: linear-gradient(90deg, #262626 0%, #F9B24E 100%);
  height: 1px;
`

export const CardsContainer = styled.div`
    width: 150%;
    display:flex;
    flex-direction: column;
    gap:10px;
   
`

export const LoaderContainer = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
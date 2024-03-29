import styled from 'styled-components'

export const SignupContainer = styled.div` 
    display:grid;
    justify-content: center; 
    grid-template-rows: 34% 58%;
    grid-template-columns: 100%;
    height: 760px;
    background-color: #262626;
    
`

export const TextContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    color: white;
    font-weight: 700;
    font-size: 25px;
    line-height: 40px; 
    background-color: #141541;
    
`

export const MainContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 150%;
    border-radius: 15px;
    background-color: white;
    padding: 15px 0px 15px;
    

    @media screen and (min-device-width : 800px) and (max-device-width : 1024px) {
        width: 70%;
        margin:auto;
    }
    @media screen and (min-device-width : 1025px){
        width: 50%;
        margin:auto;
        
    }
`



export const Hr = styled.div`
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  height: 1px;
 
`

export const TextInfo = styled.p`
    font-size: 14px;
    margin-top:25px;
    
`
export const TextDecoration = styled.span`
  color:blue;
  cursor:pointer;
  
`

export const LoaderContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 92vh;
  
`

import styled from 'styled-components'

export const LoginContainer = styled.div`
    display:grid;
    justify-content: center; 
    grid-template-rows: 42% 58%;
    grid-template-columns: 100%;
    height: 100vh;
    width: 100vw;
    background: #262626;

`

export const LogoContainer = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #141541;

`

export const MainContainer = styled.div`

    display:flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    border-radius: 15px;
    background-color: white;
    padding: 20px 10px 20px;

    
    @media screen and (min-device-width : 800px) and (max-device-width : 1024px) {
        width: 70%;
        margin:auto
    }
    @media screen and (min-device-width : 1025px){
        width: 50%;
        margin:auto
    }
`




export const Logo = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-template-rows: auto;
  
`

export const Orange = styled.div`
    background-color: #FE7E02;
    border-radius: 100% 0 0 0;
    height: 42px;
    width: 42px;
    
`

export const Gray = styled.div`
    background-color: #45525B;
    border-radius: 100% 0 0 0;
    height: 42px;
    width: 42px;
`

export const LightOrange = styled.div`
    background-color: #F9B24E;
    border-radius: 0 0 100% 0;
    height: 42px;
    width: 42px;
    
`

export const LightGray = styled.div`
    background-color: #A8BBC6;
    border-radius: 0 0 100% 0;
    height: 42px;
    width: 42px;
    
`

export const Title = styled.h3`
    font-size: 36px;
    font-weight: 700;
    line-height: 46.8px;
    margin-top: 11px;
    color: white;
`

export const SubTitle = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    color: white;
    
`

export const Hr = styled.div`
  background: linear-gradient(90deg, #7928CA 0%, #FF0080 100%);
  height: 1px;
  
`

export const LoaderContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 92vh;
  
  
`

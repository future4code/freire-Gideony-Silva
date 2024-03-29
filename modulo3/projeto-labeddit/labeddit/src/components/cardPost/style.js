import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: #262626;
    display: flex;
    flex-direction: flex;
    flex-wrap: wrap;
    padding: 9px 10px;
    border-radius: 15px;
    width: 100%;
    color: white;
    
`

export const SendBy = styled.span`
    color:#6F6F6F;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    

`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:25px;
    padding: 18px 10px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    width: 100%;
 
`

export const BodyText = styled.p`
    font-size: 16px;
    
`

export const TitleText = styled.p`
    cursor: pointer;
   
`

export const PostStatusContainer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    
`

export const VotesContainer = styled.div`
    min-width:98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.8px solid #ECECEC;
    border-radius: 28px;
    padding: 5px;
    line-height: 12px;
    text-align: center;
    font-size: 9.56098px;
    font-weight: bold;
    color:#6F6F6F;
`

export const CommentsContainer = styled.div`
    min-width:65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.8px solid #ECECEC;
    border-radius: 28px;
    padding: 5px 10px;
    font-size: 9.56098px;
    color:#6F6F6F; 
   
`

export const CommentButton = styled.span`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
   
`

export const VoteUp = styled.span`
    cursor: pointer;
    color: ${props => props.color === 1 ? '#1ED157' : '#6F6F6F'};
    
`

export const VoteDown = styled.span`
    cursor: pointer;
    color: ${props => props.color === -1 ? '#EC2E2E' : '#6F6F6F'};
   
`
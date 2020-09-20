import React from 'react';
import styled from 'styled-components';
import convo from '../../assets/conversation.jpg';

const FirstConversation = () => {
    return (
        <Container>
            <StyledHeader>First Conversation</StyledHeader>
            <StyledImg src={convo} width="100%"/>
        </Container>
    )
}

export default FirstConversation;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
`
const StyledHeader = styled.p`
    font-family: amatic-bold;
    text-align: center;
    font-size: 45px;
    margin-bottom: 30px;
`

const StyledImg = styled.img`
    margin-bottom: 60px;
`
import React from 'react';
import styled from 'styled-components';

const Introduction  = () => {
    return (
        <Container>
            <StyledHeader>Where Do We Start...</StyledHeader>
            <StyledParagraph>Theres not many ways to start an adventure log so why don't we start from the beginning.</StyledParagraph>
        </Container>
    )
}

export default Introduction; 

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

const StyledHeader = styled.p`
    font-family: amatic-bold;
    text-align: center;
    font-size: 40px;
    margin-bottom: 0px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    text-align: center;
    font-size: 25px;
`



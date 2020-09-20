import React from 'react';
import styled from 'styled-components';

const Memories = () => {
    return (
        <Container>
            <StyledHeader>Memories</StyledHeader>
            <StyledParagraph>
            So far only all the bigger things in our adventure have been mentioned,
            but what about all the other things we've done in between? Well, that's
            where these memories come into play. This is where all the small cute, 
            funny, sad, and happy moments we've had can exist.  
            </StyledParagraph>
            <StyledHeader2>(under construction)</StyledHeader2>
        </Container>
    )
}

export default Memories;

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
    font-size: 45px;
    margin-bottom: 0px;
`
const StyledHeader2 = styled.p`
    font-family: amatic-bold;
    text-align: center;
    font-size: 35px;
    margin-bottom: 0px;
    color: grey;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    text-align: center;
    font-size: 25px;
    padding: 30px;
`
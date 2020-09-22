import React from 'react';
import styled from 'styled-components';
import gif from '../assets/memories_gif.gif';
import construction from '../assets/under-construction.png';

const Memories = () => {
    return (
        <Container>
            <StyledImg src={gif} alt='memories'/>
            <StyledParagraph>
            So far only all the bigger things in our adventure have been mentioned,
            but what about all the other things we've done in between? Well, that's
            where these memories come into play. This is where all the small cute, 
            funny, sad, and happy moments we've had can exist.  
            </StyledParagraph>
            <img src={construction} width='100%' alt='construction tape'/>
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

const StyledParagraph = styled.p`
    font-family: amatic;
    text-align: center;
    font-size: 25px;
    padding: 30px;
`

const StyledImg = styled.img`
    width: 200px;
    height: 200px;
`
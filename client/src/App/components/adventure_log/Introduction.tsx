import React from 'react';
import styled from 'styled-components';

const Introduction  = () => {
    return (
        <Container>
            <StyledHeader>From The Beginning</StyledHeader>
            <StyledParagraph>
            Where do we start... well I guess there aren't many ways to start 
            an adventure log other than from the beginning, so we'll do just 
            that. This is an adventure log created for logging all the happy, 
            fun, sad, exciting, and amazing things Savannah and Jeffrey have 
            accomplished/done on their journey. This adventure log will start 
            with their first instance of communication and continue through to 
            their most recent adventure. Some small context before we start: 
            Savannah and Jeffrey first talked on the 18th of September 2019 
            through an online dating app called tinder and chatted until they 
            eventually met up for their first date on the 23rd of September 2019.  
            We'll let the rest of the page tell itself; enjoy!
            </StyledParagraph>
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
    font-size: 45px;
    margin-bottom: 0px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    text-align: center;
    font-size: 25px;
    padding: 30px;
`



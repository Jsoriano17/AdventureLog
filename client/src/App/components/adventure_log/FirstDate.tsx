import React from 'react'
import styled from 'styled-components';
import background from '../../assets/first-date.jpg';
import Line from '../../assets/first-second.png';

const FirstDate = () => {
    return (
        <Container>
            <img src={background} width="100%" alt='first date'/>
            <StyledParagraph>Ahh the first</StyledParagraph>
            <StyledParagraph2>date, probably</StyledParagraph2>
            <StyledParagraph3>one of the best days
            of <br/>their life for both of<br/> them. This day started
            <br/>with a meeting for the<br/> first time in person by a<br/>
            place near Savannah's house. They were both very
            nervous but ready to see what the day had planned
            for them. The date started with food at
            Joyluck(a Chinese restaurant), then they left to
            catch a movie called "Ad Astra", and ended the day
            with some games at a local arcade.
            </StyledParagraph3>
            <StyledLine src={Line} width='100%' alt='line'/>
        </Container>
    )
}

export default FirstDate;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 150px;
    position: relative; 
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 23%;
    top: 26%;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 21%;
    top: 33%;
`
const StyledParagraph3 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 40%;
    right: 2%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 110%;
    z-index: 1;
`

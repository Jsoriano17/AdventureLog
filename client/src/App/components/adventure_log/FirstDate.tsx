import React from 'react'
import styled from 'styled-components';
import background from '../../assets/first-date.jpg';

const FirstDate = () => {
    return (
        <Container>
            <img src={background} width="100%"/>
            <StyledParagraph>This was one</StyledParagraph>
            <StyledParagraph2>of the best days</StyledParagraph2>
            <StyledParagraph3>of my life. some more  <br/> words here, some more <br/> words here</StyledParagraph3>
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
    position: relative; 
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 95px;
    top: 125px;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 85px;
    top: 160px;
`
const StyledParagraph3 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 15px;
    top: 195px;
`
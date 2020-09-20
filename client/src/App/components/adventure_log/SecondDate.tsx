import React from 'react'
import styled from 'styled-components';
import background from '../../assets/second-date.jpg';

const SecondDate = () => {
    return (
        <Container>
            <img src={background} width="100%"/>
            <StyledParagraph>
                The second date was rollerskating with a boy who 
                didn't know how to, nothing could go wrong right? 
                Unfortunately for Jeff lots of things went wrong. 
                While Savannah was skating around like nothing, 
                Jeff was falling every to seconds busting his knees 
                and writs. Not too long after Jeff's pants ripped 
                exposing himself(what a way to impress a girl). He 
                was very embarrassed and the two had to leave to get 
                new ones. After Jeff got new pants they went hiking in 
                the mountains where they relaxed near a waterfall under 
                the stars. 
            </StyledParagraph>
        </Container>
    )
}

export default SecondDate;

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
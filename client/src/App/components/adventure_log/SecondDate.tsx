import React from 'react'
import styled from 'styled-components';
import background from '../../assets/second-date.jpg';

const SecondDate = () => {
    return (
        <Container>
            <img src={background} width="100%"/>
            <StyledParagraph>
                The second date was rollerskating with a boy <br /> who
                didn't know how to, nothing could
            </StyledParagraph>

            <StyledParagraph2>
                go wrong<br /> right? Unfort-<br />unately for Jeff<br /> lots of things<br /> went wrong.<br />
                While Savannah was skating around like nothing, Jeff
            </StyledParagraph2>
            <StyledParagraph3>
                was falling every to seconds busting his knees and writs. Not too long after
            </StyledParagraph3>
            <StyledParagraph4>
                Jeff's pants ripped exposing himself(what a way to impress a girl).
                He was very embarrassed and the two had to leave to get
                new ones. After Jeff got new pants they went hiking in
                the mountains where they relaxed near a waterfall under
                the stars.
            </StyledParagraph4>
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
    margin-bottom: 200px;
    position: relative; 
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 14%;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 52%;
    top: 28%;
`
const StyledParagraph3 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 30%;
    top: 78%;
    right: 2%;
`
const StyledParagraph4 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 92%;
    right: 2%;
`
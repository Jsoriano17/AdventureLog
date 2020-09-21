import React from 'react'
import styled from 'styled-components';
import background from '../../assets/ice-skating.jpg';
import Line from '../../assets/third-fourth.png';

const IceSkating = () => {
    return (
        <Container>
            <img src={background} width="100%" />
            <StyledParagraph>
                Winter was just around the<br /> corner and
                both of them were
            </StyledParagraph>
            <StyledParagraph2>
                ready to try some- 
            </StyledParagraph2>
            <StyledParagraph3>
                thing new. Ice Skating! couldn't be that hard
            </StyledParagraph3>
            <StyledParagraph4>
                right? To their surprise, things didn't
                really that go bad.  A few falls here and
                there but they were having fun. They had
                trouble finding the place so they didn't
                have much time to skate(looks they have
                an excuse to come again).  The closing
                time arrived and the day was over.
            </StyledParagraph4>
            <StyledLine src={Line} width='100%'/>
        </Container>
    )
}

export default IceSkating;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-top: 45px;
    margin-bottom: 160px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 21%;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 66%;
    top: 70%;
`
const StyledParagraph3 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 55%;
    top: 78%;
`
const StyledParagraph4 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 93%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 125%;
    z-index: 1;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`
import React from 'react'
import styled from 'styled-components';
import background from '../../assets/the-planetarium.jpg';
import Line from '../../assets/fourth-fifth.png';

const ThePlanetarium = () => {
    return (
        <Container>
            <img src={background} width="100%" />
            <StyledParagraph>
                Going to the Planetarium<br /> was easily one of
                the cooler things they did together.  This was
                Jeff's first time with
            </StyledParagraph>
            <StyledParagraph2>
                this kind of thing and didn't know what to expect.<br /> The planetarium was
                filled with stuff toy around with while they
                waited for the show to start. Once the show
                started they were both blown away with space
                and visuals. They held hands through the show
                until it ended(it was very sweet).  After the
                planetarium, they walked around downtown for a
                bit and got food. It was a very successful date
                compared to the last one.
            </StyledParagraph2>
            <StyledLine src={Line} width='100%'/>
        </Container>
    )
}

export default ThePlanetarium;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-bottom: 200px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 68.5%;
    top: 18%;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 67%;
    right: 2%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 115%;
    z-index: 1;
`
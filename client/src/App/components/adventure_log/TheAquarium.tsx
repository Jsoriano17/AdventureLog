import React from 'react'
import styled from 'styled-components';
import background from '../../assets/the-aquarium.jpg';
import Line from '../../assets/third-fourth.png';

const TheAquarium = () => {
    return (
        <Container>
            <img src={background} width="100%" />
            <StyledParagraph>
                Not long after the <br/>skating incident, <br/> the
                two decided to  <br/>visit the aquarium. <br/> It was
                a very fun day <br/> filled with sea animals and
                love. They grew closer as they walked around
                talking about animals and themselves. They stayed in the 
                aquarium until it closed and left satisfied.
            </StyledParagraph>
            <StyledLine src={Line} width='100%'/>
        </Container>
    )
}

export default TheAquarium;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-bottom: 80px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 46%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 98%;
    z-index: 1;
`
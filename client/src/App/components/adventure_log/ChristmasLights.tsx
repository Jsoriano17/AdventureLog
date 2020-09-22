import React from 'react'
import styled from 'styled-components';
import background from '../../assets/christmas-lights.jpg';

const ChristmasLights = () => {
    return (
        <Container>
            <img src={background} width="100%" alt='christmas'/>
            <StyledParagraph>
                Every Christmas
            </StyledParagraph>
            <StyledParagraph2>
                downtown salt lake<br /> fills itself
                up with<br /> colorful lights for<br /> everyone to see.
                <br />Savannah has been <br />dying to take Jeff to see
                them since this would be his first time. They
                set off immediately on the tracks to downtown in
                their thick winter clothes. The ride was really
                nice sitting close to each other the whole way.
                They made it and it was packed with people looking
                to do the same. The walk was freezing but well worth
                it for both of them. The lights and displays were
                beautiful. Savannah was dying to get pictures the
                whole time but Jeff wouldn't budge. After lots of
                persuading she eventually got a few from him(weak).
                The rest of the night was spent walking around and
                talking. This night was a very memorable moment for
                both of them.
            </StyledParagraph2>
        </Container>
    )
}

export default ChristmasLights;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-top: 45px;
    margin-bottom: 430px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 16%;
    top: 47%;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 53%;
    right: 2%;
`
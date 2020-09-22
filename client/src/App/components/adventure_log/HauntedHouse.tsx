import React from 'react'
import styled from 'styled-components';
import background from '../../assets/haunted-house.jpg';
import Line from '../../assets/fifth-sixth.png';

const HauntedHouse = () => {
    return (
        <Container>
            <img src={background} width="100%" alt='haunted house' />
            <StyledParagraph>
                Halloween was finally coming close and the two were looking
                for something spooky to go do together.  They settled on the
                idea of heading to a haunted house.
            </StyledParagraph>
            <StyledParagraph2>
                Before heading to the event
                Savannah painted Jeff's face against his will. She promised that
                other people would be dressed there so it would be cool if Jeff
                did as well. They arrived around ten and to Jeff's surprise,
                no one was dressed up. The wait in line was super long so they
                had lots of time to talk and hold each other. Eventually, they
                made it to the front and entered the house.  The
                house wasn't very spooky but was still very fun. They made it
                to the end and left home. before the night ended they shared
                their first kiss.
            </StyledParagraph2>
            <StyledLine src={Line} width='100%' alt='line'/>
        </Container>
    )
}

export default HauntedHouse;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-bottom: 350px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 58%;
    top: 27%;
    right: 2%;
`

const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 85%;
    right: 2%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 158%;
    z-index: 1;
`
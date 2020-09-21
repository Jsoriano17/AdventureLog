import React from 'react'
import styled from 'styled-components';
import background from '../../assets/butterfly-biosphere.jpg';
import Line from '../../assets/fourth-fifth.png';

const ButterflyBiosphere = () => {
    return (
        <Container>
            <img src={background} width="100%"/>
            <StyledParagraph>
                The butterfly biosphere a<br/> place I almost forgot 
                about, I'm sure <br/>Jeff's tried to. This place<br/> was 
                a nightmare for Jeff.<br/> The place was filled with <br/>
                insects and he was<br/> terrified of all of them.<br/> 
                Savannah on the other<br/> hand seemingly wanted to 
                hold all of them(really showing Jeff up here). 
                It was a cool experience for Jeff but he wanted 
                out ASAP. Savannah got Jeff to hold a butterfly 
                and the two-headed home. 
            </StyledParagraph>
            <StyledLine src={Line} width='100%'/>
        </Container>
    )
}

export default ButterflyBiosphere;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-bottom: 140px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 43%;
    right: 2%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 110%;
    z-index: 1;
`
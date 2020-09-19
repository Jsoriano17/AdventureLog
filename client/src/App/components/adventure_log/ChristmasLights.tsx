import React from 'react'
import styled from 'styled-components';
import background from '../../assets/christmas-lights.jpg';

const ChristmasLights = () => {
    return (
        <Container>
            <img src={background} width="100%"/>
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
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 90px;
    top: 125px;
`
import React from 'react'
import styled from 'styled-components';
import background from '../../assets/second-date.jpg';

const SecondDate = () => {
    return (
        <Container>
            <img src={background} width="100%"/>
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
    left: 90px;
    top: 125px;
`
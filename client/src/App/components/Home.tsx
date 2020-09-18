import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import FaceGif from '../assets/savannah_and_jeff_gif.gif';

const Home = () => {
    return (
        <div>
            <StyledHeader>Our Adventure</StyledHeader>
            <Container>
                <Line />
                <StyledHeader>Log</StyledHeader>
                <Line />
            </Container>
            <Container>
                <img src={FaceGif}  width='100%'/>
            </Container>
            <Container>
                <StyledP>Savannah</StyledP>
                <StyledP>Jeffrey</StyledP>
            </Container>
        </div>
    )
}

export default observer(Home);

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledHeader = styled.p`
    font-size: 70px;
    font-family: amatic-bold;
    text-align: center;
    margin: 0px;
`

const Line = styled.div`
    background: black; 
    width: 70px; 
    height: 2px;
    margin: 0px 20px;
`

const StyledP = styled.p`
    font-size: 30px;
    font-family: amatic;
    text-align: center;
    margin: 0px 15%;
`

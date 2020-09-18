import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import FaceGif from '../assets/savannah_and_jeff_gif.gif';
import FirstConversation from './adventure_log/FirstConversation';
import FirstDate from './adventure_log/FirstDate';
import SecondDate from './adventure_log/SecondDate';
import TheAquarium from './adventure_log/TheAquarium';
import Introduction from './adventure_log/Introduction';
import ThePlanetarium from './adventure_log/ThePlanetarium';
import HauntedHouse from './adventure_log/HauntedHouse';
import ButterflyBiosphere from './adventure_log/ButterflyBiosphere';

const Home = () => {
    return (
        <>
            <StyledHeader>Our Adventure</StyledHeader>
            <Container>
                <Line />
                <StyledHeader2>Log</StyledHeader2>
                <Line />
            </Container>
            <Container>
                <img src={FaceGif}  width='100%'/>
            </Container>
            <Container>
                <StyledP1>Savannah</StyledP1>
                <StyledP2>Jeffrey</StyledP2>
            </Container>
            <Container>
                <Introduction />
            </Container>
            <Container>
                <FirstConversation />
            </Container>
            <Container>
                <FirstDate />
            </Container>
            <Container>
                <SecondDate />
            </Container>
            <Container>
                <TheAquarium />
            </Container>
            <Container>
                <ThePlanetarium/>
            </Container>
            <Container>
                <HauntedHouse/>
            </Container>
            <Container>
                <ButterflyBiosphere/>
            </Container>
        </>
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
    line-height: 1;
    margin-top: 15px;
`
const StyledHeader2 = styled.p`
    font-size: 70px;
    font-family: amatic-bold;
    text-align: center;
    margin: 0px;
    line-height: 1;
`

const Line = styled.div`
    background: black; 
    width: 70px; 
    height: 2px;
    margin: 0px 20px;
`

const StyledP1 = styled.p`
    font-size: 30px;
    font-family: amatic;
    text-align: center;
    margin: 0px 13%;
`

const StyledP2 = styled.p`
    font-size: 30px;
    font-family: amatic;
    text-align: center;
    margin: 0px 17%;
`

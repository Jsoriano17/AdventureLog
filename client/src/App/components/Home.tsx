import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <div>
            <StyledH1>Our Adventure</StyledH1>
            <StyledH1>Log</StyledH1>
        </div>
    )
}

export default observer(Home);

const StyledH1 = styled.p`
    font-size: 70px;
    font-family: amatic-bold;
    text-align: center;
    margin: 0px;
`

import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import LoadingGif from '../assets/loading_gif.gif';

const Loading = () => {
    return (
        <Container>
          <img src={LoadingGif} width="100%" alt='loading' />
        </Container>
    )
}

export default observer(Loading);

const Container = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`
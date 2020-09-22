import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Container>
            <StyledH1>We Tried To Find What You Were Looking For But Found Nothing...</StyledH1>
            <Link to="/">
                <Button>Go To Home</Button>
            </Link>
        </Container>
    )
}

export default NotFound;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    padding: 30px;
`

const StyledH1 = styled.h1`
    font-family: amatic-bold;
    text-align: center; 
    font-size: 40px;
`
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';
import SharedStore from '../store/SharedStore';

const LogInPage = () => {
    const sharedStore = useContext(SharedStore);
    const { changeLoggedIn } = sharedStore;
    return (
        <Component>
            <ContainerCol>
                <h1>Login in page</h1>
                <ContainerRow>
                    <p>Username</p>
                    <StyledInput placeholder='username' />
                </ContainerRow>
                <ContainerRow>
                    <p>Password</p>
                </ContainerRow>
                <StyledButton type='submit' onClick={changeLoggedIn}>Submit</StyledButton>
            </ContainerCol>
        </Component>
    )
}

export default observer(LogInPage);

const Component = styled.div`
    background: black;
    padding: 30px;
    color: #fcbe11;
    height: 1000px;
`

const ContainerCol = styled.div`
    display: flex;
    flex-direction: column;
`
const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const StyledButton = styled.button`
    float: right;
    width: 100px;
`
const StyledInput = styled.input`
    margin-left: 20px;
    height: 20px;
`
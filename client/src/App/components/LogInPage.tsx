import { observer } from 'mobx-react-lite';
import React, { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import SharedStore from '../store/SharedStore';
import eye from '../assets/eye-blinking.gif';
const LogInPage = () => {
    const sharedStore = useContext(SharedStore);
    const { loginToApp } = sharedStore;

    const [info, setInfo] = useState({ username: '', password: ''});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        loginToApp(info.username, info.password);
        e.preventDefault();
    }

    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setInfo({ ...info, [name]: value });
    }

    return (
        <Container>
            <Component>
                <img src={eye} width='90%' />
            </Component>
            <StyledHeader>For your eyes only.</StyledHeader>
            <form onSubmit={handleSubmit}>
                <ContainerRow>
                    <p>Username</p>
                    <StyledInput 
                    name='username' 
                    onChange={handleChange} 
                    placeholder='username' />
                </ContainerRow>
                <ContainerRow>
                    <p>Password</p>
                    <StyledInput 
                    name='password' 
                    onChange={handleChange} 
                    type='password' 
                    placeholder='password' />
                </ContainerRow>
                <StyledButton type='submit'>Submit</StyledButton>
            </form>
        </Container>
    )
}

export default observer(LogInPage);

const Component = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: black;
    position: relative;
`
const Container = styled.div`
   background: black;
   position: relative;
   width: 100%;
   height: 100vh;
`

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #fcd80d;
    font-size: 20px;
`
const StyledButton = styled.button`
    margin-left: 69%;
    width: 70px;
    color: black;
    background-color: grey;
    outline: #858585;
    border: 2px solid #333333;
`
const StyledInput = styled.input`
    margin-left: 20px;
    height: 25px;
    color: black;
    background: grey;
    outline: #383838;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
`

const StyledHeader = styled.p`
    position: absolute;
    top: 270px;
    left: 0;
    right: 0;
    margin: auto;
    font-Size: 28px;
    font-family: '1942_report1942_report';
    color: #fcd80d;
    text-align: center;
`
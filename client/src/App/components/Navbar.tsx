import { NONAME } from 'dns';
import React, { useState } from 'react';
import styled from 'styled-components';
import message from '../assets/message_of_the_day_gif.gif';

const Navbar = () => {
  const [active, setActive] = useState(true)
  const [hamburger, setHamburger] = useState("hamburger hamburger--elastic");

  const switchActive = (active: boolean) => {
    setActive(!active)
    if (active === true) {
      setHamburger("hamburger hamburger--elastic is-active");
    } else {
      setHamburger("hamburger hamburger--elastic");
    }
  }

  const showMenu = (active: boolean) => {
    if (active === false) {
      return (
        <StyledNav>
          <StyledUl>
            <li>Adventure Start</li>
            <li>Memories</li>
            <li>Add Message...</li>
          </StyledUl>
        </StyledNav>
      )
    }
  }

  return (
    <Container>
      <StyledButton
        onClick={() => switchActive(active)}
        className={hamburger}
        type="button" >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </StyledButton>
      <StyledImg src={message} width="80px" />
      {showMenu(active)}
    </Container>
  )
}

export default Navbar;

const StyledButton = styled.button`
  outline: none;
  box-shadow: none;
`

const StyledNav = styled.nav`
  font-size: 35px;
  font-family: amatic-bold;
`
const StyledUl = styled.ul`
  list-style-type: none;
`

const StyledImg = styled.img`
  margin-left: 270px;
  position: absolute; 
  top: 0;
  right: 10px;
`
const Container = styled.div`
  position: relative; 
`
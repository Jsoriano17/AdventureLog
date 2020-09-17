import { NONAME } from 'dns';
import React, { useState } from 'react';
import styled from 'styled-components';

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
  return (
    <StyledButton
      onClick={() => switchActive(active)}
      className={hamburger}
      type="button" >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </StyledButton>
  )
}

export default Navbar;

const StyledButton = styled.button`
  outline: none;
  box-shadow: none;
`
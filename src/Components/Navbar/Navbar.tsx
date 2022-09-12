import React from 'react'
import {Link } from 'react-router-dom'

//styles
import {NavContainer, Logo} from './NavbarStyled'

const Navbar = () => {
  return (
    <NavContainer>
        <Link to='/'>
            <Logo>Dictionary</Logo>
        </Link>
        <div>
            Toggle Mode
        </div>
    </NavContainer>
  )
}

export default Navbar
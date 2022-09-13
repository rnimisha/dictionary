import React from 'react'
import {Link } from 'react-router-dom'

//styles
import {NavContainer, Logo} from './NavbarStyled'
import './toggle.css'

//types
type Theme = {
  primary: string;
  primarytext: string;
  secondary: string;
  secondarytext: string;
}

type PropsType ={
  setTheme : React.Dispatch<React.SetStateAction<Theme>>,
  theme: Theme,
  light : Theme,
  dark : Theme
}

const Navbar = ({setTheme,theme, light, dark} : PropsType) => {
  return (
    <NavContainer>
        <Link to='/' style={{textDecoration : 'none'}}>
            <Logo>Dictionary</Logo>
        </Link>

        <div className="toggle-container">
          <label className="checkbox" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" placeholder='dd' />
            <div className="slider round" onClick={()=>{
              const now = theme === dark ? light : dark
              return setTheme(now)
            }}></div>
          </label>
        </div>

    </NavContainer>
  )
}

export default Navbar
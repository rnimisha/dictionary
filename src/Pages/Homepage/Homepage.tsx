import React from 'react'

import { HomeContainer , ImageContainer,Image} from './HomepageStyled'

import logo from '../../assets/images/logo3.webp'
import InputField from '../../Components/Navbar/InputField/InputField'

const Homepage = () => {
  return (
    <HomeContainer>
        <ImageContainer>
            <Image src={logo} alt="logo" />
        </ImageContainer>
        <InputField/>
    </HomeContainer>
  )
}

export default Homepage
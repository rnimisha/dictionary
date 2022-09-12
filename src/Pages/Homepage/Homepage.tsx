import React from 'react'

import { HomeContainer , ImageContainer,Image} from './HomepageStyled'

import logo from '../../assets/images/giflogo.gif'
import InputField from '../../Components/InputField/InputField'

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
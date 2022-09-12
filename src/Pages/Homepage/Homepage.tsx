import React from 'react'

import { HomeContainer , ImageContainer,Image} from './HomepageStyled'

import logo from '../../assets/images/catlogo.gif'
import InputField from '../../Components/InputField/InputField'
import Button from '../../Components/Button/Button'

const Homepage = () => {
  return (
    <HomeContainer>
        <ImageContainer>
            <Image src={logo} alt="logo" />
        </ImageContainer>
        <InputField/>
        <Button/>
    </HomeContainer>
  )
}

export default Homepage
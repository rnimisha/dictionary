import {useState} from 'react'

import { HomeContainer , ImageContainer,Image} from './HomepageStyled'

import logo from '../../assets/images/catlogo.gif'
import InputField from '../../Components/InputField/InputField'
import Button from '../../Components/Button/Button'

const Homepage = () => {

  const [word, setWord] = useState("")

  return (
    <HomeContainer>
        <ImageContainer>
            <Image src={logo} alt="logo" />
        </ImageContainer>
        <InputField word ={word} setWord={setWord}/>
        <Button word= {word}/>
    </HomeContainer>
  )
}

export default Homepage
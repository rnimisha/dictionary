import {useState} from 'react'
import {motion} from 'framer-motion';

import { HomeContainer , ImageContainer,Image} from './HomepageStyled'

import logo from '../../assets/images/giflogo.gif'
import LightLogo from '../../assets/images/catlogo.gif'
import InputField from '../../Components/InputField/InputField'

type Theme = {
  primary: string;
  primarytext: string;
  secondary: string;
  secondarytext: string;
}

type Props ={
  theme : Theme,
  dark : Theme
}
const Homepage = ({theme, dark} : Props) => {

  const [word, setWord] = useState("")

  return (
    <HomeContainer as={motion.div} initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1, x: '100vw'}}
    transition={{ease:"circOut",type:"tween",duration: 2}}>
        <ImageContainer>
            <Image src={theme === dark ? logo : LightLogo} alt="logo" />
        </ImageContainer>
        <InputField word ={word} setWord={setWord}/>
    </HomeContainer>
  )
}

export default Homepage
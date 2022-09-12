import React from 'react'

import NotFoundImg from '../../assets/images/404img2.png'
import { HomeContainer, Image } from '../../Pages/Homepage/HomepageStyled'
import {ImageDiv,Paragraph} from './ErrorStyled'

const Error = () => {
  return (
    <HomeContainer>
        <ImageDiv>
            <Image src={NotFoundImg} alt="" />
            <Paragraph>No match found</Paragraph>
        </ImageDiv>
    </HomeContainer>
  )
}

export default Error
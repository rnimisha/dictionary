import React from 'react'

import NotFoundImg from '../../assets/images/404img2.png'
import SearchingImg from '../../assets/images/searching.gif'

import { HomeContainer, Image } from '../../Pages/Homepage/HomepageStyled'
import {ImageDiv,Paragraph} from './ErrorStyled'

type PropType ={
    variant : 'error' | 'loading'
}
const Error = ({variant} : PropType) => {
  return (
    <HomeContainer>
        <ImageDiv>
            <Image src={variant === 'error' ? NotFoundImg : SearchingImg} alt="loading" />
            <Paragraph>{variant === 'error' ? 'No Match Found' : 'Loading.......'}</Paragraph>
        </ImageDiv>
    </HomeContainer>
  )
}

export default Error
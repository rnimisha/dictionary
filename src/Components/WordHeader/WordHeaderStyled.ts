import styled from 'styled-components'
import {BsVolumeUp} from 'react-icons/bs'

export const WordHeaderContainer = styled.div`
    margin-top: 4rem;
    min-height: 250px;
    padding: 20px 60px;
    backdrop-filter: blur(4px);
    background-color: #E7E4E3;
    border-radius: 26px;
    box-shadow: 0px 35px 68px 0px rgba(202, 204, 203, 0.5), 
    inset 0px -1px 16px 0px rgba(202, 204, 203, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Word = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const WordHeading = styled.p`
    font-size: 3.2rem;
    font-weight: 500;
`

export const Span = styled.span`
    font-size : 1rem;
    color : #7a7979;
    margin-left: 3px;
    font-style: italic;
`

export const VolumeIcon = styled(BsVolumeUp)`
  font-size: 2.8rem;
  color : #7a7979;

  &:hover{
    transform: scale(1.1);
    color : #B5B5A9;
  }
`
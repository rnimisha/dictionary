import React from 'react'

import data from '../../Pages/Meaning/dataType'

//styles
import {WordHeaderContainer, Word, WordHeading, Span, VolumeIcon} from './WordHeaderStyled'

type PropType = {
    wordData : data | null,
    word : string | undefined
}
const WordHeader = ({wordData, word} : PropType) => {

    const phonetic = wordData? wordData[0].phonetic ? wordData[0].phonetic : '' : ''
    const phoentics = wordData? wordData[0].phonetics ? wordData[0].phonetics[0] :  '' : ''
    const audioUrl = phoentics? phoentics.audio? phoentics.audio.replace('//ssl', 'https://ssl') :' ': ''

    return (
        <WordHeaderContainer>
            <Word>
                <WordHeading>{word}</WordHeading>
                <Span>{phonetic}</Span>
            </Word>
            <div>
                {audioUrl && <VolumeIcon onClick={()=>{
                    const audio = new Audio(audioUrl)
                    audio.play();
                }}/>}
            </div>
        
        </WordHeaderContainer>
    )
}

export default WordHeader

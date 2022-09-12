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
    return (
        <WordHeaderContainer>
            <Word>
                <WordHeading>{word}</WordHeading>
                <Span>{phonetic}</Span>
            </Word>
            <div>
                <VolumeIcon/>
            </div>
        
        </WordHeaderContainer>
    )
}

export default WordHeader

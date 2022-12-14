import React from 'react'

import data from '../../Pages/Meaning/dataType'
import { RelatedWordDiv, Word } from './RelatedWordsStyled'

//types
type PropsType = {
    variant :'Synonym'| 'Antonym',
    wordData : data | null
}
const RelatedWords = ({variant, wordData} : PropsType) => {

    return (
        <div>
            {
                wordData?.map((items)=>{
                    return items?.meanings.map((meaningsArr, id)=>{
                    return (
                        <React.Fragment key ={id}>
                            {variant === 'Synonym' ?  
                                <RelatedWordDiv>
                                    {
                                        meaningsArr.synonyms.map((words, id)=>{
                                            return (
                                                <Word key = {id}>  <span>&nbsp;&nbsp;</span>{words}</Word>
                                            )
                                        })
                                    }
                                </RelatedWordDiv>

                                : 
                             
                                <RelatedWordDiv>
                                    {
                                        meaningsArr.antonyms.map((words, id)=>{
                                            return (
                                                <Word key = {id}>  <span>&nbsp;&nbsp;</span>{words}</Word>
                                            )
                                        })
                                    }
                                </RelatedWordDiv>
                             }
                        </React.Fragment>
                    )
                    })
                })
            }
        </div>
    )
}

export default RelatedWords
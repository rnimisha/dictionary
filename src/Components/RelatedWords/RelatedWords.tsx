import React from 'react'

import data from '../../Pages/Meaning/dataType'
import { RelatedWordDiv, Word } from './RelatedWordsStyled'

type PropsType = {
    variant :'Synonym'| 'Antonym',
    wordData : data | null
}
const RelatedWords = ({variant, wordData} : PropsType) => {
  return (
    <div>
        {
            wordData?.map((items)=>{
                return items?.meanings.map((meaningsArr)=>{
                  return (
                      <>
                          <RelatedWordDiv>
                            {
                            meaningsArr?.synonyms.map((words, id)=>{
                              return (
                                <Word key = {id}>  <span>&nbsp;&nbsp;</span>{words}</Word>
                              )
                            })
                            }
                          </RelatedWordDiv>
                        
                      </>
                  )
                })
              })
        }
    </div>
  )
}

export default RelatedWords
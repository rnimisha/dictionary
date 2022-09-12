import React from 'react'

import data from '../../Pages/Meaning/dataType'
import { PartOfSpeech, List, DefinationList } from './DefinitionsStyled'

type PropType = {
  wordData : data | null
}

const Definitions = ({wordData} : PropType) => {
  return (

    <div> 
      {
        wordData?.map((items)=>{
          return items?.meanings.map((meaningsArr, index)=>{
            return (
                <>
                    <PartOfSpeech>{meaningsArr?.partOfSpeech}</PartOfSpeech>
                    <DefinationList>
                      {
                      meaningsArr?.definitions.map((def, id)=>{
                        return (
                          <List key = {id}>  {def.definition}</List>
                        )
                      })
                      }
                    </DefinationList>
                  
                </>
            )
          })
        })
      }
    </div>
  )
}

export default Definitions
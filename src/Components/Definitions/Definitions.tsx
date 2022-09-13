import React, { Fragment } from 'react'

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
                <React.Fragment key ={index}>
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
                  
                </React.Fragment>
            )
          })
        })
      }
    </div>
  )
}

export default Definitions
import React from 'react'

import data from '../../Pages/Meaning/dataType'

type PropType = {
  wordData : data | null
}

const Meanings = ({wordData} : PropType) => {
  return (

    <div>
      {
        wordData?.map((items)=>{
          return items?.meanings.map((meaningsArr)=>{
            return (
                <>
                    <h3>{meaningsArr?.partOfSpeech}</h3>
                    <ul>
                      {
                      meaningsArr?.definitions.map((def, id)=>{
                        return (
                          <li key = {id}>{def.definition}</li>
                        )
                      })
                      }
                    </ul>
                  
                </>
            )
          })
        })
      }
    </div>
  )
}

export default Meanings
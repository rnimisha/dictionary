import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import data from './dataType'

import WordHeader from '../../Components/WordHeader/WordHeader'
import Definitions from '../../Components/Definitions/Definitions'
import Options from '../../Components/Options/Options'
import { IndividualOutput, OutputDiv } from './MeaningStyled'
import RelatedWords from '../../Components/RelatedWords/RelatedWords'
import Error from '../../Components/Error/Error'

const Meaning = () => {

  const [wordData, setWordData] = useState<data | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [optionSelected, setOptionSelected] = useState<'Definition' | 'Synonym'| 'Antonym'>('Definition')
  const [isDataFound, setIsDataFound] = useState(false)

  const params = useParams()
  const word = params.word

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response)=>{
      setWordData(response.data)
      setIsLoading(false)
      setIsDataFound(true)
    }).catch((error)=>{
      setIsDataFound(false)
      setIsLoading(false)
    })
  }, [])
  return (
    <div>
     {
      !isLoading && isDataFound &&
      <>
        <WordHeader wordData = {wordData} word = {word}/>
        <OutputDiv>
          <Options optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
            <IndividualOutput>
              {optionSelected === 'Definition' && <Definitions wordData = {wordData}/>}
              {optionSelected === 'Synonym' && <RelatedWords variant='Synonym' wordData= {wordData}/>}
              {optionSelected === 'Antonym' && <RelatedWords variant='Antonym' wordData= {wordData}/>}
            </IndividualOutput>
        </OutputDiv>
      </>
     }
     {
      !isLoading && !isDataFound && <Error variant ='error'/>
     }
     {
      isLoading && <Error variant='loading'/>
     }
    </div>
  )
}

export default Meaning
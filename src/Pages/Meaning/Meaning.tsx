import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {motion} from 'framer-motion';

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
  const word = (params.word)?.toLowerCase()

  useEffect(() => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response)=>{
      setWordData(response.data)
      setIsDataFound(true)
    }).catch((error)=>{
      setIsDataFound(false)
    }).finally(()=>{
      setIsLoading(false)
    })
  }, [])

  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1}}
    transition={{ease:"circOut",type:"tween",duration: 2}}>
     {
      !isLoading && isDataFound &&
      <motion.div initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1,scale : 1}}
      exit={{opacity: 1}}
      transition={{ease:"circOut",type:"tween",duration: 1.5}}>
        <WordHeader wordData = {wordData} word = {word} />
        <OutputDiv >
          <Options optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
            <IndividualOutput>
              {optionSelected === 'Definition' && <Definitions wordData = {wordData}/>}
              {optionSelected === 'Synonym' && <RelatedWords variant='Synonym' wordData= {wordData}/>}
              {optionSelected === 'Antonym' && <RelatedWords variant='Antonym' wordData= {wordData}/>}
            </IndividualOutput>
        </OutputDiv>
      </motion.div>
     }
     {
      !isLoading && !isDataFound && <Error variant ='error'/>
     }
     {
      isLoading && <Error variant='loading'/>
     }
    </motion.div>
  )
}

export default Meaning
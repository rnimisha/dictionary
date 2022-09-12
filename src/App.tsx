import React from 'react'
import GlobalStyles from './assets/styles/GlobalStylesStyled'
import { MainContainer } from './assets/styles/MainContainerStyled'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Meaning from './Pages/Meaning/Meaning'

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Homepage/>}/>
          <Route path = '/meaning/:word' element = {<Meaning/>}/>
        </Routes>
      </BrowserRouter>
    </MainContainer>
    </>
  )
}

export default App
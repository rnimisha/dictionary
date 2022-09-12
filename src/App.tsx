//libary and packages
import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

//styles
import GlobalStyles from './assets/styles/GlobalStylesStyled'
import { MainContainer } from './assets/styles/MainContainerStyled'

// components
import Meaning from './Pages/Meaning/Meaning'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'

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
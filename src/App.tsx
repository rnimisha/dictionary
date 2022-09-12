import React from 'react'
import GlobalStyles from './assets/styles/GlobalStylesStyled'
import { MainContainer } from './assets/styles/MainContainerStyled'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <MainContainer>
      <Homepage/>
    </MainContainer>
    </>
  )
}

export default App
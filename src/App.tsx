//libary and packages
import {useState} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

//styles
import GlobalStyles from './assets/styles/GlobalStylesStyled'
import { MainContainer } from './assets/styles/MainContainerStyled'

// components
import Meaning from './Pages/Meaning/Meaning'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'

const dark = {
  primary : '#23232e',
  primarytext : '#f0eeee',
  secondary : '#020213',
  secondarytext : '#fff'
}

const light = {
  primary : '#fff',
  primarytext : '#7a7979',
  secondary : '#CACCCB',
  secondarytext : '#000'
}
const App = () => {
  const [theme, setTheme] = useState(light)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <BrowserRouter>
          <Navbar setTheme ={setTheme} theme ={theme} light ={light} dark ={dark}/>
          <MainContainer>
            <Routes>
              <Route path = '/' element = {<Homepage theme ={theme} dark ={dark}/>}/>
              <Route path = '/meaning/:word' element = {<Meaning/>}/>
            </Routes>
            </MainContainer>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
import React from 'react'
import GlobalStyles from './assets/styles/GlobalStyles'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage'

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <Homepage/>
    </>
  )
}

export default App
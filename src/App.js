import React from 'react'
import { Navbar } from './components'
import { Header, Category, AboutUs, Items, Party, Footer } from "./containers"
import "./App.css"
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <Header />
        <Category />
        <AboutUs />
        <Items />
        <Party />
        <Footer />
      </div>
    </div>
  )
}

export default App
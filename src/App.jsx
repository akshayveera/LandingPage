
import React from 'react'
import HeroPage from './components/HeroPage'
import "./fonts.css"
import Article2 from './components/Article2'
import Article3 from './components/Article3'

const App = () => {
  return (
    <section className='max-w-screen  overflow-x-hidden '>
        <HeroPage/>
        <Article2/>
        <Article3/>
    </section>
  )
}

export default App
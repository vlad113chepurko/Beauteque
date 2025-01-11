import React from 'react'
import './SASS/App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react'

import balsam from '../assets/balsam.jpg'
import gift from '../assets/gift.jpg'
import parfume from '../assets/parfume.jpg'
import parfume2 from '../assets/parfume2.jpg'
import pudra from '../assets/pudra.jpg'
import sivorotka from '../assets/sivorotka.jpg'
import tush from '../assets/tush.jpg'


function App() {

  const [itemCount, _] = useState(0)

  useEffect(() => {
    let width = window.innerWidth;
    console.log(width);
  }, [])

  return (
    <main>
      <Header  itemCount={itemCount}/>
      <Main />
    </main>
  )
}

export default App
import './SASS/App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'




function App() {

  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    let width = window.innerWidth;
    console.log(width);
  }, [])

  return (
    <main>
      <Header  itemCount={itemCount}/>
      <Main itemCount={itemCount} setItemCount={setItemCount}/>
      <Footer />
    </main>
  )
}

export default App
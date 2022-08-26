import { useState } from 'react'
import Header from './components/Header'
import Chunks from './components/Chunks'

const App = () => {  
  const [chunks, setChunks] = useState([
    {
        id: 1,
        text: 'FUCKIT DAWG',
        day: 'April 20th at 4:20',
        reminder: true,
    },
    {
        id: 2,
        text: 'BruUuHh',
        day: 'April 25th at 4:20',
        reminder: true,
    },
    {
        id: 3,
        text: 'fuuuux B',
        day: 'April 27th at 4:17',
        reminder: false,
    },
])
  return (
    <div className='container'>
      <Header />
      <Chunks chunks={chunks} />
    </div>
  )
}

export default App

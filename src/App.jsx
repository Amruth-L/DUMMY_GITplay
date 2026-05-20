import { useState } from 'react'
import SearchFilter from './SearchFilter.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <SearchFilter />
    </>
  )
}

export default App;

import React from 'react'
import Context from './contextApi/ContextData'
import AllMovies from './components/AllMovies'
function App(){

  
  return(
    <Context>
<AllMovies/>
    </Context>
  )
}
export default App
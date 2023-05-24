import React,{useState,useEffect,useRef,createContext} from 'react'

export const MyContext = createContext()

function ContextData(props){
  const[movies,setMovies]=useState([])
  // const[title,setTitle]=useState('')
const clearRef = useRef(false)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b166281b8fmshd15fd4815dbcc35p1a8d03jsn1511f212c524',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  useEffect(()=>{
    if(clearRef.current === false){
      const getData = async ()=>{
        const response = await fetch("https://imdb-top-100-movies.p.rapidapi.com/",options)
        const result = await response.json()
        
        // setTitle(ans)
        setMovies(result)
        console.log(result)
      }
      getData()
      return ()=>{
        clearRef.current = true
      }
    }
  },[])
  
  return(
    <MyContext.Provider value = {{movies}}>
{props.children}
<h1></h1>
    </MyContext.Provider>
  )
}
export default ContextData
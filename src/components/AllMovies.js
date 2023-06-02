import React,{useContext} from 'react'
import {MyContext} from "../contextApi/ContextData"
import './AllMovies.css'
function AllMovies(){
  const {movies} = useContext(MyContext)
  // console.log(movies)

  return (
    <div>
<h1>AllMovies</h1>
<div className="movie-card">
{movies.map((info)=>
    // <li key={info.id}>{info.title}</li>
      <div className="movie-div" key={info.id}>
        <div><img src={info.image} height="190px" width="130px" /></div>
        {/* <div className="details"> */}
        <div>{info.title}</div>
        <div>{info.rating}</div>
        <div>{info.director}</div>
        <div>{info.trailer}</div>
        {/* </div> */}
      </div>
)}
 </div>

    </div>
  )
}
export default AllMovies
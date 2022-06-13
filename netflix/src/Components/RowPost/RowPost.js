import React, { useState } from 'react'
import { useEffect } from 'react'
import Youtube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import {APIKey, imageUrl } from '../../Constats/constats'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {

    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("network error")
    })
    
  }, [])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
              
              movies.map((obj) => 
                <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                
              )
            }
        </div>
    </div>
  )
}

export default RowPost
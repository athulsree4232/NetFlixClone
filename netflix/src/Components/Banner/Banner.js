import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {APIKey , imageUrl} from '../../Constats/constats'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {

    axios.get(`trending/all/week?api_key=${APIKey}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  
  
  }, [])
  
  return (
    <div
    style={{backgroundImage : `url(${movie ?  imageUrl+ movie.backdrop_path : " "})`}} 
     className='banner'>
        <div className='content'>
            <h1  className='title'>{movie ? movie.name :""}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}t</h1>

        </div>

        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
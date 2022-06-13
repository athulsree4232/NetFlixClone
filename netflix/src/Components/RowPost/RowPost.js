import React, { useState } from 'react'
import { useEffect } from 'react'
import Youtube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import { APIKey, imageUrl } from '../../Constats/constats'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState("")
  useEffect(() => {

    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("network error")
    })
    
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (movie_id)=>{
    console.log(movie_id)
    axios.get(`/movie/${movie_id}/videos?api_key=${APIKey}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log("array empty");
      }

    })
  }

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
              
              movies.map((obj) => 
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                
              )
            }
        </div>
        { urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
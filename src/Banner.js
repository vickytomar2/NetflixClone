import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(requests.fetchNetflixOriginals);
           //console.log(Math.floor(Math.random() * (request.data.results.length-1)));
           setMovie(
               request.data.results[Math.floor(Math.random() * (request.data.results.length-1))]
           );
           return request;
       }

       fetchData(); 
    }, []);

    console.log(movie);

    function trim(str, n){
        return str?.length > n ? str.substring(0, n) +"..." : str;
    }
    return (
      <header className="banner"
         style = {{
             backgroundSize : "cover",
             backgroundPosition: "center center",
             backgroundImage : `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}"                
             )`
         }}
      >
          <div className="banner_content"> 
          <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
           <div className="banner_buttons">
               <button className="banner_button">Play</button>
               <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_desc">{trim(movie?.overview,200)}</h1>
          </div>

          <div className="banner_fade-bottom"></div>
      </header>  
    )
}

export default Banner

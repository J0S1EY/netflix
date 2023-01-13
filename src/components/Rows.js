import React from 'react';
import './Rows.css';
import instance from '../instance';
import { useState, useEffect } from 'react';
import requests from '../request';




function Rows({ title, fetchUrl, isNetflix }) {
    const [tMovies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"; // base url

    async function Movies() {
        const moviesList = await instance.get(fetchUrl) // api call request to instance component
        setMovies(moviesList.data.results)
    }
    //console.log(tMovies)

    useEffect(() => {
        Movies()
    }, [])

    return (
        <div className='row'>
            <h3 className='title'>{title}</h3>
            <div className='trending_movies'>
                {
                    tMovies.map((movie) => (
                        <img className={`tm_thumbail ${isNetflix && "poster_thumbail"} `}  // adding extra css style for netflix orgins 
                        src={`${base_url}${isNetflix ? movie.poster_path : movie.backdrop_path} `}
                            alt={movie.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default Rows
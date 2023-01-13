import React from 'react'
import instance from '../instance';
import requests from '../request';
import { useState, useEffect } from 'react';
import './Banner.css';


function Banner() {
    const [movies, setmovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";


    async function netflixMovies() {
        const movieList = await instance.get(requests.fetchNetflixOriginals)
        setmovies(movieList.data.results[
            Math.floor(Math.random() * movieList.data.results.length - 1)]) // randam genarator using math.floor
    }
    console.log(movies)
    useEffect(() => {
        netflixMovies()
    }, [])

    function trunkcate(str, num) {
        return str?.length > num ? str?.substr(0, num - 1) + "..." : str // char length lessthan num str return : str
    }

    return (
        <>
            <div className='banner' style={
                {
                    backgroundImage: `url("https://image.tmdb.org/t/p/original${movies.backdrop_path}")`,
                    objectFit: 'fill',
                    backgroundPosition:'contain' ,
                   
                    backgroundSize:'cover'
                

                    
                }
            }> {/* inline style */}
                <div className='content'>
                    <h2 className='title'> {movies.name} </h2>
                    <h4 className='discription'>
                        {trunkcate(movies.overview, 150)} {/*trankcate calling*/}
                    </h4>
                </div>

            </div>
        </>
    )
}
export default Banner
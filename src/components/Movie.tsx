// src/widgets/Header.tsx
import React,{useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';
import './Movie.scss';
interface Movie {
  movies: Array<any>,
  loading: boolean
}
const API_KEY = 'f53f12ca';
const BASE_URL= 'http://www.omdbapi.com/'


export const Movie = (props) => {
    console.log(props.movie.id);
    const movieId = props.movie.id;
    const [movie, setMovie] =useState(Object);
    
    useEffect(() => {
      //Fetch movie details according to movieId in the url params.
        const fetchMovies = async() => {
         const res = await axios.get(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
         console.log(res.data)
         setMovie(res.data);
         console.log(movie.Plot);
       }
       fetchMovies(); 
     }, [])

    return (
        <div className="cover">
          <h2>{movie.Title}</h2>
            <div className="row">
                <div className="col-l">
                  {/* check if img is available if not, insert a placeholder image */}
                  <img src={ movie.Poster == 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found': movie.Poster} alt=""/>
                </div>
                <div className="col-r">
                    <ul>
                      <li><strong>Runtime: </strong>{movie.Runtime}</li>
                      <hr />
                      <li><strong>Director: </strong> {movie.Director}</li>
                      <hr />
                      <li><strong>Actors: </strong>{movie.Actors}</li>
                      <hr />
                      <li><strong>IMDb Score: </strong>{movie.imdbRating}</li>
                      <hr />
                      <li><strong>Writers: </strong>{movie.Writer}</li>
                      <hr />
                      <li><strong>Genre: </strong>{movie.Genre}</li>
                      <hr />
                      <li><strong>Production: </strong>{movie.Production}</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div>
                  <h3>About</h3>
                  <hr/>
                  <p>{movie.Plot}</p>
                </div>
            </div>
          
        </div>
    )
};

export default Movie;
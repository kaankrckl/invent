import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Pager from './components/Pager';
import Search from './components/Search';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getMovieList} from './actions/SEARCH';

//import FetchMovies from './components/FetchMovies';
const API_KEY = 'f53f12ca';
const BASE_URL= 'http://www.omdbapi.com/'



const App = (fetchPosts) => {
  const [loading] =useState(false);
  const [currentPage] =useState(1);
  const [moviesPerPage] =useState(10);

  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter);
  const details = useSelector((state)=>state.details);
  const query = useSelector((state)=>state.query);
  const moviesList = useSelector((state)=>state.movies);
  const totalMovies = useSelector((state)=>state.totalMovies);
  
 

  useEffect(() => {
     const fetchMovies = async() => {
    }
    //Set default search results to pokemon
    dispatch(getMovieList("pokemon", details, ''));
    fetchMovies(); 
  }, [])
  // Calculate the number of pages required for pagination
  const indexOfLastMovie = currentPage *  moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);

  //Change Page
  const paginate = async(e,pageNumber) =>{
  
      dispatch(getMovieList(query, details, pageNumber));
    
  }

  const getMovie = (query, details) => {
    if(query.length>2){
    dispatch(getMovieList(query, details, ''));
    }
  }



  return (
    
    <Router>
      <Route path='/' exact render={props =>
          <React.Fragment>
               <div className="container">
                <Search getMovie={getMovie}/>
                <Movies movies={currentMovies} loading={loading}/>
                <Pager moviesPerPage={moviesPerPage} totalMovies={totalMovies} paginate={paginate}/>
              </div>
          </React.Fragment>
        } />
      <Route key="post" path='/movie/:id' exact render={({ match })  =>
          <React.Fragment>
            <Movie movie={match.params}/>
          </React.Fragment>
        } />
    </Router>



  );
}

export default App;

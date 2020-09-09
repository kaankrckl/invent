// src/widgets/Header.tsx
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import './Movies.scss';


interface Movie {
  movies: Array<any>,
  loading: boolean
}

const useStyles = makeStyles({
    tableRow: {
        "&:hover": {
          cursor: "pointer !important",
          backgroundColor: "#8C92AC"
        }
      }
  });


export const Movies = ({movies, loading}: Movie) => {

  let history = useHistory();

    const classes = useStyles();
    if(loading) {
        return (
          <div className="main">
            <CircularProgress />
          </div>
        )
    }

    const handleClick = (movie) =>{
        console.log(movie.Title)
        history.push(`/movie/${movie.imdbID}`);
    }

    return (
        <div className="container">
            <TableContainer component={Paper}>
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Poster</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>imdbID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie, index) => (
            <TableRow className={classes.tableRow} onClick={()=>handleClick(movie)} key={index}>
              <TableCell>
                <img id="tbImg"
                  src={ movie.Poster == 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found': movie.Poster} 
                  alt=""/>
              </TableCell>
              <TableCell>{movie.Title}</TableCell>
              <TableCell>{movie.Year}</TableCell>
              <TableCell>{movie.Type}</TableCell>
              <TableCell>{movie.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
};

export default Movies;
// src/widgets/Header.tsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './Pager.scss';
interface Movie {
    moviesPerPage: number,
    totalMovies: number,
    paginate: (number: number, e) => void;
  }
  const useStyles = makeStyles({
    pagination: {
        "&:focus": {
          outline: "none"
        }
      }
  });


export const Pager = ({moviesPerPage, totalMovies, paginate}: Movie) => {

    const classes = useStyles();
    const pageNumbers: number[] = [];
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
      paginate(event, value)
    };

    for(let i =1; i<=Math.ceil(totalMovies/moviesPerPage);i++){
        pageNumbers.push(i);
    }

  return(
    <div className="main">
        <Pagination 
        className={classes.pagination}  
        onChange={handleChange} 
        count={Math.ceil(totalMovies/moviesPerPage)}
        variant="outlined"  />
    </div>


      
  )
};

export default Pager;
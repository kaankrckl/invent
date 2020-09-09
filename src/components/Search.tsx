// src/widgets/Header.tsx
import React, { useState, useEffect} from 'react';
//import Pagination from "materialui-pagination-component";
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from "react-redux";

interface Search {
  movies: Array<any>,
  loading: boolean
}

interface Detail {
  year: any,
  type: any
}


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const Search = ({getMovie}) => {

    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.counter);
    const moviesList = useSelector((state)=>state.movies);
    const [selectedDate, handleDateChange] = useState(new Date());
    const [search, setSearch] =useState("Pokemon");
    const classes = useStyles();
    const [type, setType] = React.useState('');
    const [year, setYear] = React.useState('');
    const years: number[] = [];

    const details: Detail = {
      year: year,
      type: type
    } 

      const getYears= () => {
        var currentYear = new Date().getFullYear()
        for ( let i = 1888; currentYear >= i; currentYear--) {
          years.push(currentYear);
      } 
      }
      getYears();
  
    const handleChangeType = (event) => {
      setType(event.target.value);
    };
    const handleChangeYear = (event) => {
      setYear(event.target.value);
    };
    return (
        <div className="container">
            <h1>Search Movies, Series and Episodes</h1>
              <SearchBar
                //value={this.state.value}
                placeholder="Search"
               // onChange={(query) => getMovie(query, type, year)}
               onChange={(query) => getMovie(query, details)}
               // onRequestSearch={() => doSomethingWith(this.state.value)}
            />

           <FormControl className={classes.formControl}>
                <InputLabel id="year">Year</InputLabel>
                <Select
                labelId="year"
                id="year"
                value={year}
                onChange={handleChangeYear}
                >
                  <MenuItem value={''}>All</MenuItem>
                {years.map((year) => (
                  <MenuItem value={year}>{year}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="type">Type</InputLabel>
                <Select
                labelId="type"
                id="type"
                value={type}
                onChange={handleChangeType}
                >
                <MenuItem value={''}>All</MenuItem>
                <MenuItem value={'movie'}>Movies</MenuItem>
                <MenuItem value={'series'}>Series</MenuItem>
                <MenuItem value={'episode'}>Episodes</MenuItem>
                </Select>
            </FormControl>

        </div>
    )
};

export default Search;
import { combineReducers } from 'redux';
import axios from 'axios';
import {SEARCH} from '../actions/SEARCH';


const API_KEY = 'f53f12ca';
const BASE_URL= 'http://www.omdbapi.com/'

interface StateI {
    movies: string[];
    totalMovies: number;
    query: string;
    details: Object
  }

const initialState :StateI={
        movies: [],
        totalMovies: 0,
        query: 'pokemon',
        details: {
            year: '',
            type: ''
        }

}

export default function rootReducer(state = initialState as any, action) {
    const payload = action.payload
    switch(action.type) {
        case 'SEARCH':
            return { ...state, movies: action.payload.Search, totalMovies:action.payload.totalResults, query: action.query,
            details:action.details}
        default:
            return state;
    }
}

import axios from 'axios';
export const SEARCH = 'SEARCH';

const API_KEY = 'f53f12ca';
const BASE_URL= 'http://www.omdbapi.com/'

  //fetch movie list based on search term, type and query
  export function getMovieList(query,details, page){
    return (dispatch) => {
    // e.preventDefault();
    
     return axios.get(`${BASE_URL}?s=${query}&type=${details.type}&y=${details.year}&page=${page}&apikey=${API_KEY}`).then((res) =>{
        if(res.data.Search !== undefined){
        dispatch({type: SEARCH, payload: res.data, query: query, details:details});
        }
    })
    .catch((error)=> {
        dispatch({type: SEARCH, payload: error});
    });
     
    
   }
}
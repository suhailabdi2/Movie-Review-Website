import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [movies,setMovies] = useState('');
  const [tvs,setTV]= useState('');
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const options = {
    method: 'GET',
    key:process.env.REACT_APP_API_KEY,
    headers:{
      accept:'application/json',
      Authorization:`Bearer ${process.env.REACT_APP_API_KEY}`
    }
  };
  useEffect(()=> {
    fetch(url, options)
    .then(res => res.json())
    .then(json => {
      setMovies(json.results);
      console.log(json.results);
    })
    .catch(err => console.error(err));
  },[])
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',options)
    .then(res=>res.json())
    .then(json =>{
      setTV(json.results);
      console.log(json.results)
    })
    .catch(err => console.error(err));
  },[])
  return (
   <div>
    <h1> Best Movies</h1>
      <ul>
        {movies && movies.map(
          (mov,index )=> <li key={index}>{mov.original_title} :language in {mov.original_language} imdb rating <meter min="0" max="10" value={mov.vote_average}></meter><br/> <img src={`${baseURL+mov.poster_path}`}/></li>
        )}
      </ul>
      <h1>Best TV Series</h1>
      <ul>
        {tvs && tvs.map((tv,index)=>
          <li key={index}>{tv.name}<meter min="0" max="10" value={tv.vote_average} /></li>
        ) }
      </ul>

   </div>
  );
}

export default App;

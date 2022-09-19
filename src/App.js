 
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Search_Icon from './search.svg'

// 36bc9383

const API_URL='http://www.omdbapi.com/?apikey=36bc9383'

 
function App() {
  
  const [movies,setMovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState("")

  const searchMovies= async (title)=>{
    	const response= await fetch(`${API_URL}&s=${title}`);
      const data =await response.json();

      //console.log(data.Search);
      setMovies(data.Search);
  }

  useEffect(()=>{
     searchMovies('fast');

  },[]);
  
   
  return (
    <div className="app">
        <h1>MovieLand </h1>
        
        <div className='search'>
          <input placeholder='Search for movies' value={searchTerm} onChange={ (e)=>setSearchTerm(e.target.value) }/>  
          <img src={Search_Icon} alt="" onClick={ ()=>searchMovies(searchTerm) }/>
        </div>

        { //Isto {} é para por codigo javascript
          movies?.length>0 ?  // Esta parte verifica se o array tives dados
          (
            <div className='container'>
              { //Usa-se Map em arrays, esta função deve ter um return com, como um ciclo for
                movies.map((movie) => {
                  return(<MovieCard movie1={movie}/>); 
                })
              }
            </div>
          )
          :(
              <div className='empty'> 
                <h2>No movies found</h2>
              </div>
            )
        }

        
    </div>
  );
}

export default App;

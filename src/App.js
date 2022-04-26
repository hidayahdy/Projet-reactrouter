import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import React, { useState } from 'react'
import { Data } from './components/Data'
import NavigationBar from "./components/NavigationBar";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies,setMovies]=useState(Data)
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
      
     <Route path='/movies' element={<MovieList movies={movies}/>}/>
     <Route path='/movies/details/:id' element={<MovieDetails movies={movies}/>}/> 
     </Routes>
    </div>
  );
}

export default App;

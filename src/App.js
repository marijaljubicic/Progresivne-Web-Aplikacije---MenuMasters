import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';
//require('dotenv').config()

//console.log(process.env)

const App = () => {
  
  const APP_ID ="63dd722f";
  const APP_KEY ="f44ec973bf63c9e5a7be5e50e002eb54";
  //const APP_ID =process.env.API_ID;
  //const APP_KEY = process.env.API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipes();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);

  const getRecipes = async () => {
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  function getSearch(e) {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(

    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        calories={recipe.recipe.calories} 
        url={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

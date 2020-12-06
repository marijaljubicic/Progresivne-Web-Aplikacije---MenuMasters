import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title,calories,image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className="ingredientsList">Ingredients: </p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt=""/>
            <p>Calories: {calories}</p>
            <a className="view-button" target="_blank" href={url}>View Recipe</a>
        </div>
    );
}

export default Recipe;
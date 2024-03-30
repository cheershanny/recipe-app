import Link from "next/link";
import React from "react";

const RecipesList = () => {
  const recipes = [
    { id: 1, name: "Pho", cusine: "Soup" },
    { id: 2, name: "Banh Mi", cusine: "Vietnamese" },
    { id: 3, name: "Pasta", cusine: "Italian" },
  ];
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;

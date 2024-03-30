import { notFound } from "next/navigation";

interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  steps: string[];
}
interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  required: boolean;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Pho",
    ingredients: [
      { id: 1, name: "tofu", amount: 100, unit: "g", required: true },
      { id: 2, name: "noodle", amount: 2, unit: "kg", required: true },
      { id: 3, name: "veggie", amount: 3, unit: "leaf", required: false },
    ],
    steps: ["prepare xyz", "do zys", "make sdswf"],
  },
  {
    id: 2,
    name: "Banh Mi",
    ingredients: [
      { id: 1, name: "dff", amount: 100, unit: "g", required: true },
      { id: 2, name: "fg", amount: 2, unit: "kg", required: true },
      { id: 3, name: "sdtfgf", amount: 3, unit: "leaf", required: false },
    ],
    steps: ["prepare fdsdgdfgdfgfd", "do zys", "make sdswf"],
  },
  {
    id: 3,
    name: "Pasta",
    ingredients: [
      {
        id: 1,
        name: "sure it's different",
        amount: 100,
        unit: "g",
        required: true,
      },
      { id: 2, name: "fdsfgdgdfg", amount: 2, unit: "kg", required: true },
      { id: 3, name: "sdfdsf", amount: 3, unit: "leaf", required: false },
    ],
    steps: ["prepare xyz", "do zys", "make sdswf"],
  },
];

const RecipePage = ({ params }: { params: { slug: string } }) => {
  const recipe = recipes.find((recipe) => (recipe.id === parseInt(params.slug)));
  console.log({ recipe });
  if (!recipe) notFound();
  return (
    <div>
      <h2 className="font-bold">{recipe.name}</h2>
      <h3 className="font-semibold py-3">Ingredients: </h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <strong>{ingredient.name}</strong>: {ingredient.amount}{" "}
            {ingredient.unit}
          </li>
        ))}
      </ul>
      <h3 className="font-semibold py-3">Way to go:</h3>
      <ul>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipePage;

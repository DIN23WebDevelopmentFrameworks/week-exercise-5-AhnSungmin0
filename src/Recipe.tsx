interface IRecipeProps {
    recipeData: IRecipe;
}
export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export default function Recipe({ recipeData }: IRecipeProps): JSX.Element {
    return (
        <div>
            <h2>{recipeData.name}</h2>
            <img src={recipeData.image} alt={recipeData.name} />
            <h3>Ingredients</h3>
            <ul>
                {recipeData.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
                {recipeData.instructions.map(instruction => (
                    <li key={instruction}>{instruction}</li>
                ))}
            </ol>
            <h3>Prep Time</h3>
            <p>{recipeData.prepTimeMinutes} minutes</p>
            <h3>Cook Time</h3>
            <p>{recipeData.cookTimeMinutes} minutes</p>
            <h3>Servings</h3>
            <p>{recipeData.servings}</p>
            <h3>Difficulty</h3>
            <p>{recipeData.difficulty}</p>
            <h3>Cuisine</h3>
            <p>{recipeData.cuisine}</p>
            <h3>Calories Per Serving</h3>
            <p>{recipeData.caloriesPerServing}</p>
            <h3>Tags</h3>
            <ul>
                {recipeData.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <h3>Meal Type</h3>
            <ul>
                {recipeData.mealType.map(meal => (
                    <li key={meal}>{meal}</li>
                ))}
            </ul>
            <h3>Rating</h3>
            <p>{recipeData.rating}</p>
            <h3>Review Count</h3>
            <p>{recipeData.reviewCount}</p>
        </div>
    );
}
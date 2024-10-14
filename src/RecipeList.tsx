import Recipe from "./Recipe";
import { IRecipe } from "./Recipe";

interface IRecipeListProps {
    recipes: IRecipe[];
}

export default function RecipeList({ recipes }: IRecipeListProps): JSX.Element {
    return (
        <div>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
}
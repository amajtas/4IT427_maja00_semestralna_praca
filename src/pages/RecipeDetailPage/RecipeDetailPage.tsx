import { useParams, Link } from "react-router-dom";
import { mockRecipes } from "@/data/mockRecipes";

export const RecipeDetailPage = () => {
    const { recipeId } = useParams<{ recipeId: string }>();

    //najdem recept v mock datach podla id
    const recipe = mockRecipes.find((r) => r.id === recipeId);

    //keby id neexistovalo
    if (!recipe) {
        return (
            <div>
                <h2>Recept sa nenašiel</h2>
                <Link to="/">Späť na hlavnú stránku</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to="/">Späť na hlavnú stránku</Link>
            <h1>{recipe.title}</h1>
            <p><strong>Kategória:</strong> {recipe.category}</p>
            <p><strong>Hodnotenie:</strong> {'⭐'.repeat(recipe.rating)}</p>
            {recipe.timeToCookMinutes && (
                <p><strong>Čas prípravy:</strong> {recipe.timeToCookMinutes} minút</p>
            )}

            <h3>Ingrediencie:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h3>Postup prípravy:</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{recipe.instructions}</p>
        </div>
    );
};
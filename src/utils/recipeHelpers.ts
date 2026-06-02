import type { Recipe } from "@/types/recipe.types";
import type { RecipeCategory } from "@/types/recipe.types";

// Filtrovanie receptov podla zadanej kategorie

export const filterRecipesByCategory = (
    recipes: Recipe[],
    category: RecipeCategory | 'All'
): Recipe[] => {
    if (category === 'All') {
        return recipes;
    }

    return recipes.filter(recipe => recipe.category === category);
};
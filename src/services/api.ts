import type { Recipe } from "@/types/recipe.types";
import { mockRecipes } from "@/data/mockRecipes";

export const fetchRecipes = async (): Promise<Recipe[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockRecipes);
        }, 1000);
    });
};
import type { Recipe } from "@/types/recipe.types";
//import { mockRecipes } from "@/data/mockRecipes";

// export const fetchRecipes = async (): Promise<Recipe[]> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(mockRecipes);
//         }, 1000);
//     });
// };

export const fetchRecipes = async (): Promise<Recipe[]> => {
    try {
        const response = await fetch('/recipes.json');

        if (!response.ok) {
            throw new Error('HTTP chyba: ${response.status}');
        }
        // Konverzia z textu na TypeScript pole
        const data: Recipe[] = await response.json();

        await new Promise(resolve => setTimeout(resolve, 1000));

        return data;
    } catch (error) {
        console.error("Chyba pri stahovani dat: ", error);
        throw error;
        
    }
};
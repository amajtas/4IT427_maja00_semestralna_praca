import { useState } from "react";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { FilterBar } from "@/components/recipes/FilterBar";
//import { mockRecipes } from "@/data/mockRecipes";
import { useRecipes } from "@/hooks/useRecipes"; //ziskanie dat
import { filterRecipesByCategory } from "@/utils/recipeHelpers";
import type { RecipeCategory } from "@/types/recipe.types";

export const HomePage = () => {
    // State na uchovanie aktuálne vybranej kategórie
    const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'All'>('All');

    //Ziskam data a stavy z hooku
    const { recipes, isLoading, isError } = useRecipes();

    //Ukazem loading obrazovku ked sa data nacitaju
    if (isLoading) {
        return <div style={{ fontSize: '20px', padding: '20px' }}>Načítavam recepty</div>;
    }

    if (isError) {
        return <div style={{ color: 'red', padding: '20px' }}>Chyba: {isError}</div>;
    }

    // Vypočítame vyfiltrované recepty pri každom renderi
    const filteredRecipes = filterRecipesByCategory(recipes, activeCategory);

    return (
        <div>
            <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : (<p>V tejto kategórii zatiaľ nie sú žiadne recepty.</p>
                )}
            </div>
        </div>
    );
};
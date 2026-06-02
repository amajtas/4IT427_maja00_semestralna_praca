import { useState } from "react";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { FilterBar } from "@/components/recipes/FilterBar";
//import { mockRecipes } from "@/data/mockRecipes";
import { useRecipes } from "@/hooks/useRecipes"; //ziskanie dat
import { filterRecipesByCategory } from "@/utils/recipeHelpers";
import type { RecipeCategory } from "@/types/recipe.types";
import "./HomePage.css";

export const HomePage = () => {
    // State na uchovanie aktuálne vybranej kategórie
    const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'All'>('All');

    //Ziskam data a stavy z hooku
    const { recipes, isLoading, error } = useRecipes();

    //Ukazem loading obrazovku ked sa data nacitaju
    if (isLoading) {
        return <div className="empty-state">Načítavam recepty</div>;
    }

    if (error) {
        return <div className="empty-state" style={{ color: 'red' }}>Chyba: {error}</div>;
    }

    // Vypočítame vyfiltrované recepty pri každom renderi
    const filteredRecipes = filterRecipesByCategory(recipes, activeCategory);

    return (
        <div className="home-page">
            <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            <div className="recipe-grid">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : (<div className="empty-state">V tejto kategórii zatiaľ nie sú žiadne recepty.</div>
                )}
            </div>
        </div>
    );
};
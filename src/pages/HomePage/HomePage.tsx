import { useState } from "react";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { FilterBar } from "@/components/recipes/FilterBar";
import { mockRecipes } from "@/data/mockRecipes";
import { filterRecipesByCategory } from "@/utils/recipeHelpers";
import type { RecipeCategory } from "@/types/recipe.types";

export const HomePage = () => {
    // State na uchovanie aktuálne vybranej kategórie
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'All'>('All');
    // Vypočítame vyfiltrované recepty pri každom renderi
  const filteredRecipes = filterRecipesByCategory(mockRecipes, activeCategory);

    return (
    <div>
      <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (<p>V tejto kategórii zatiaľ nie su žiadne recepty.</p>
        )}
      </div>
    </div>
  );
};
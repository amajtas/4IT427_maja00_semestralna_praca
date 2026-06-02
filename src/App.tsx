import { RecipeCard } from "./components/recipes/RecipeCard"
import { mockRecipes } from "./data/mockRecipes"
import { useState } from "react";
import { FilterBar } from "./components/recipes/FilterBar";
import { filterRecipesByCategory } from "./utils/recipeHelpers";
import type { RecipeCategory } from "./types/recipe.types";

function App() {

  // State na uchovanie aktuálne vybranej kategórie
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'All'>('All');

  // Vypočítame vyfiltrované recepty pri každom renderi
  const filteredRecipes = filterRecipesByCategory(mockRecipes, activeCategory);

  return (
    <div>
      <h1>Môj katalóg receptov</h1>
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
}

export default App

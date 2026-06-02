import { RecipeCard } from "./components/recipes/RecipeCard"
import { mockRecipes } from "./data/mockRecipes"

function App() {
  return (
    <div>
      <h1>Môj katalóg receptov</h1>
      <div>
        {mockRecipes.map((recipe) => (
          // React pri používaní .map() VŽDY vyžaduje unikátny 'key' prop pre každý prvok!
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default App

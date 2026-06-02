import { useParams, Link } from "react-router-dom";
//import { mockRecipes } from "@/data/mockRecipes";
import { useRecipes } from "@/hooks/useRecipes";
import "./RecipeDetailPage.css";

export const RecipeDetailPage = () => {
    const { recipeId } = useParams<{ recipeId: string }>();

    // //najdem recept v mock datach podla id
    // const recipe = mockRecipes.find((r) => r.id === recipeId);

    // Namiesto importu hore, zavolam hook useRecipes
    const { recipes, isLoading, error } = useRecipes();
    if (isLoading) return <div className="recipe-detail-container" style={{ textAlign: 'center' }}>Načítavam detail receptu...</div>;
    if (error) return <div className="recipe-detail-container" style={{ color: 'red', textAlign: 'center' }}>Chyba: {error}</div>;

    //najdem recept v json podla id
    const recipe = recipes.find((r) => r.id === recipeId);

    //keby id neexistovalo
    if (!recipe) {
        return (
            <div className="recipe-detail-container" style={{ textAlign: 'center' }}>
                <h2>Recept sa nenašiel</h2>
                <Link to="/" className="back-link">Späť na hlavnú stránku</Link>
            </div>
        );
    }
    const renderStars = (stars: number) => {
        return '★'.repeat(stars) + '☆'.repeat(5 - stars);
    };
    return (
        <div className="recipe-detail-container">
            <Link to="/" className="back-link">
                Späť na zoznam receptov
            </Link>

            <div className="detail-header">
                <h1 className="detail-title">{recipe.title}</h1>

                <div className="detail-meta">
                    <span className="meta-badge">{recipe.category}</span>
                    <span className="meta-item" title={`Hodnotenie: ${recipe.rating} z 5`}>
                        <span style={{ color: '#FBBF24', letterSpacing: '2px' }}>{renderStars(recipe.rating)}</span>
                    </span>
                    {recipe.timeToCookMinutes && (
                        <span className="meta-item">⏱ {recipe.timeToCookMinutes} minút</span>
                    )}
                </div>
            </div>

            {recipe.imageUrl && (
                <div className="detail-image-wrapper">
                    <img 
                        src={recipe.imageUrl} 
                        alt={`Fotografia hotového jedla: ${recipe.title}`} 
                        className="detail-image" 
                    />
                </div>
            )}

            <div className="detail-section">
                <h3 className="section-title">Ingrediencie</h3>
                <ul className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="detail-section">
                <h3 className="section-title">Postup prípravy</h3>
                <p className="instructions-text">{recipe.instructions}</p>
            </div>
        </div>
    );
};
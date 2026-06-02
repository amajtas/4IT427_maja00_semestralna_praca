import type { Recipe } from "@/types/recipe.types";
import { Link } from "react-router-dom";
import "./RecipeCard.css";
interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const { id, title, category, rating, timeToCookMinutes, imageUrl } = recipe;

    //funkcia na vykreslenie hviezdiciek
    const renderStars = (stars: number) => {
        return '⭐'.repeat(stars);
    };

    return (
        <Link to={`/recipe/${id}`} className="recipe-card">
            <div className="card-image-wrapper">
                {/* Ak máme obrázok zobrazíme ho - inak "Bez obrázka". */}
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={`Obrázok k receptu ${title}`}
                        className="card-image"
                        loading="lazy"
                    />
                ) : (<span>Bez obrázka</span>)
                }
            </div>

            <div className="card-content">
                <span className="card-category">{category}</span>
                <h3 className="card-title">{title}</h3>
                <div className="card-footer">
                    <span className="card-stars" title={`Hodnotenie: ${rating} z 5`}>
                        {renderStars(rating)}
                    </span>
                    {timeToCookMinutes && (
                        <span>⏱ {timeToCookMinutes} minút</span>
                    )}
                </div>
            </div>

        </Link>
    );
};

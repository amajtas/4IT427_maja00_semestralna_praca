import type { Recipe } from "@/types/recipe.types";

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const { title, category, rating, timeToCookMinutes, imageUrl } = recipe;

    //funkcia na vykreslenie hviezdiciek
    const renderStars = (stars: number) => {
        return '⭐'.repeat(stars);
    };

    return (
        <div>
            {/* Ak máme obrázok zobrazíme ho - inak "Bez obrázka". */}
            {imageUrl ? (
                <img src={imageUrl} alt={`Obrázok k receptu ${title}`} />
            ) : (<div>Bez obrázka</div>)
            }

            <div>
                <span>{category}</span>
                <h3>{title}</h3>
                <div>
                    <span title={`Hodnotenie: ${rating} z 5`}>{renderStars(rating)}</span>
                    {timeToCookMinutes && (
                        <span>{timeToCookMinutes} minút</span>
                    )}
                </div>
            </div>
        </div>
    );
};

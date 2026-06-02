import type { RecipeCategory } from "@/types/recipe.types";
import "./FilterBar.css";

interface FilterBarProps {
    activeCategory: RecipeCategory | 'All';
    onCategoryChange: (category: RecipeCategory | 'All') => void;
}

export const FilterBar = ({ activeCategory, onCategoryChange }: FilterBarProps) => {
    //zoznam moznosti z ktorych si vyberam
    const categories: (RecipeCategory | 'All')[] = ['All', 'Polievky', 'Hlavné jedlá', 'Dezerty'];

    return (
        <div className="filter-bar">
            {categories.map((category) => (
                <button key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`filter-button ${activeCategory === category ? 'active' : ''}`}>
                    {category === 'All' ? 'Všetky recepty' : category}
                </button>
            ))}
        </div>
    );
};
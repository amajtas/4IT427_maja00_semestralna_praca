import type { RecipeCategory } from "@/types/recipe.types";

interface FilterBarProps {
    activeCategory: RecipeCategory | 'All';
    onCategoryChange: (category: RecipeCategory | 'All') => void;
}

export const FilterBar = ({ activeCategory, onCategoryChange }: FilterBarProps) => {
    //zoznam moznosti z ktorych si vyberam
    const categories: (RecipeCategory | 'All')[] = ['All', 'Polievky', 'Hlavné jedlá', 'Dezerty'];

    return (
        <div>
            {categories.map((category) => (
                <button key={category}
                    onClick={() => onCategoryChange(category)}
                    style={{
                        fontWeight: activeCategory === category ? 'bold' : 'normal',
                        border: activeCategory === category ? '2px solid black' : '1px solid gray'
                    }}> {category === 'All' ? 'Všetky recepty' : category}
                </button>
            ))}
        </div>
    );
};
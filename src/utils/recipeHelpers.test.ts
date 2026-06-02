import { describe, it, expect } from 'vitest';
import { filterRecipesByCategory } from './recipeHelpers';
import type { Recipe } from '@/types/recipe.types';


describe('filterRecipesByCategory', () => {
    const mockData: Recipe[] = [
        { id: '1', title: 'Kapustnica', category: 'Polievky', rating: 5, ingredients: [], instructions: '' },
        { id: '2', title: 'Špagety', category: 'Hlavné jedlá', rating: 4, ingredients: [], instructions: '' },
        { id: '3', title: 'Vývar', category: 'Polievky', rating: 3, ingredients: [], instructions: '' },
    ];

    it('ak je kategoria "All" vrati vsetky recepty', () => {
        const result = filterRecipesByCategory(mockData, 'All');
        expect(result.length).toBe(3);
    });

    it('ak je vybrana kategoria vrati recepty len z tej kategorie', () => {
        const result = filterRecipesByCategory(mockData, 'Polievky');
        expect(result.length).toBe(2);
        expect(result[0].category).toBe('Polievky');
        expect(result[1].category).toBe('Polievky');
    });

    it('ak sa v kategorii nenachadza ziadny recept, vrati prazdne pole', () => {
        const result = filterRecipesByCategory(mockData, 'Dezerty');
        expect(result.length).toBe(0);
    });
});
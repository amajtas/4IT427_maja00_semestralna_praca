export type RecipeCategory = 'Polievky' | 'Hlavné jedlá' | 'Dezerty';

export interface Recipe {
    id: string;
    title: string;
    category: RecipeCategory;
    rating: number;
    ingredients: string[]; //zoznam ingrediencii
    instructions: string;
    timeToCookMinutes?: number; //nepovinny udaj
    imageUrl?: string; //nepovinny udaj
}
import { useState, useEffect } from "react";
import type { Recipe } from "@/types/recipe.types";
import { fetchRecipes } from "@/services/api";

export const useRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Na začiatku hneď načítavam
    const [error, setError] = useState<String | null>(null);

    //useEffect sa spusti len raz ked sa komponenta prvykrat vykresli na obraozvku
    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true); //Pre istotu zapnem loading
                const data = await fetchRecipes(); //Cakam 1 sek na odpoved
                setRecipes(data); //Ulozim stiahnute data
            } catch (err) {
                setError('Nepodarilo sa načítať recepty. Skúste to prosím neskôr.');
            } finally {
                setIsLoading(false); //Load vypnem vzdy, aj ked to prejde/neprejde
            }
        };

        loadData();
    }, []);

    //Hook vrati len to, co komponenty potrebuju na zobrazenie
    return { recipes, isLoading, error }
}
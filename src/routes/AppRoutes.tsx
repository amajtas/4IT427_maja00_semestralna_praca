import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage/HomePage";
import { RecipeDetailPage } from "@/pages/RecipeDetailPage/RecipeDetailPage";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Hlavná stránka */}
            <Route path="/" element={<HomePage />} />

            {/* Dynamická cesta pre detail receptu */}
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />

            {/* 404 */}
            <Route path="*" element={<div>Stránka neexistuje (404)</div>} />
        </Routes>
    );
};
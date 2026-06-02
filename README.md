# Moja zbierka receptov (React SPA)

Tento projekt je moderná Single Page Aplikácia vytvorená v knižnici **React** s využitím **TypeScriptu** a buildovacieho nástroja **Vite**. Aplikácia slúži ako osobný katalóg receptov, ktorý umožňuje používateľom prezeranie kategórií, filtrovanie a zobrazenie detailu konkrétneho receptu.

## Funkcionality

*   **Prehľad receptov:** Zobrazenie všetkých dostupných receptov v responzívnej CSS Grid mriežke.
*   **Filtrovanie kategórií:** Interaktívny filter na triedenie receptov (napr. Polievky, Hlavné jedlá, Dezerty).
*   **Detail receptu:** Samostatná stránka s ingredienciami, postupom prípravy a údajmi (čas prípravy, hodnotenie).
*   **Optimalizácia výkonu:** Využitie `loading="lazy"` pre obrázky, vďaka čomu sa šetria prenášané dáta a urýchľuje sa prvé načítanie stránky.

## Technologický stack a architektúra

*   **Frontend:** React, TypeScript.
*   **Routing:** `react-router-dom` pre klientský routing, dynamické cesty (`/recipe/:recipeId`) a navigáciu bez znovunačítavania stránky.
*   **State Management a Hooky:** Využitie lokálneho stavu (`useState`), vedľajších efektov (`useEffect`) a extrakcia logiky do vlastného custom hooku.
*   **Data Fetching:** Asynchrónne sťahovanie dát cez `fetch` v rámci vlastného hooku `useRecipes`, stavy načítavania: `loading`, `error` a `success`.
*   **Styling:** Čisté CSS s využitím **dizajn tokenov** pre udržanie konzistencie (farby, typografia, spacing).
*   **Testovanie:** Automatizované testy využívajúce **Vitest**, **React Testing Library** a **jsdom** .

## Štruktúra projektu

Projekt využíva type-based štruktúru zložiek:

```text
src/
 ├── components/       # Znovupoužiteľné UI komponenty (RecipeCard, FilterBar)
 ├── pages/            # Komponenty reprezentujúce celé stránky (HomePage, RecipeDetailPage)
 ├── hooks/            # Vlastné React hooky s oddelenou logikou (useRecipes)
 ├── utils/            # Pomocné funkcie bez React závislosti (recipeHelpers)
 ├── types/            # TypeScript interfejsy a typy (recipe.types.ts)
 ├── services/         # Simulácia API služby / načítavame z JSON
 └── routes/           # Definícia aplikačných ciest (AppRoutes)
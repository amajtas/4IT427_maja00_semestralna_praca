import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterBar } from './FilterBar';

describe('FilterBar komponenta', () => {

    it('Zobrazenie vsetkych kategorii ako tlacidiel', () => {
        const mockOnCategoryChange = vi.fn();

        render(
            <FilterBar
                activeCategory='All'
                onCategoryChange={mockOnCategoryChange}
            />
        );

        //Kontrola ci uzivatel vidi spravne texty
        expect(screen.getByText('Všetky recepty')).toBeInTheDocument();
        expect(screen.getByText('Polievky')).toBeInTheDocument();
        expect(screen.getByText('Hlavné jedlá')).toBeInTheDocument();
        expect(screen.getByText('Dezerty')).toBeInTheDocument();
    });

    it('Zavolanie onCategoryChange pri kliknuti', () => {
        const mockOnCategoryChange = vi.fn(); // vi.fn() funguje ako špión, sleduje, či bol zavolaný

        render(
            <FilterBar
                activeCategory='All'
                onCategoryChange={mockOnCategoryChange}
            />
        );

        const soupButton = screen.getByText('Polievky');
        fireEvent.click(soupButton);

        //Overenie, ci bola funckia zavolana a dostala spravny argument
        expect(mockOnCategoryChange).toHaveBeenCalledTimes(1);
        expect(mockOnCategoryChange).toHaveBeenCalledWith('Polievky');
    });
});
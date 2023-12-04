'use strict';

import { writable } from 'svelte/store';
import type { Dog, SearchPreferences } from './interfaces';

export const isLoggedIn = writable<boolean>(false);

export const isLoading = writable<boolean>(true);

export const allBreeds = writable<string[]>([]);

/** Pointer for current page in search results, to maintain search position
 * when going back and forth between routes
 */
export const currentPage = writable<number>(0);

export const searchPreferences = writable<SearchPreferences>({
	ascending: true,
	selectedBreeds: new Set<string>(),
	ageMin: 0,
	ageMax: 20,
});

export const availableDogs = writable<Dog[]>([]);

export const favoritedDogs = writable<Dog[]>([]);

export const matchedDog = writable<Dog | undefined>(undefined);

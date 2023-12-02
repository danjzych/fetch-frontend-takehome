'use strict';

import { writable } from 'svelte/store';
import type { Dog } from './interfaces';

interface Pagination {
	nextPage: string | null;
	lastPage: string | null;
}

export const isLoggedIn = writable<Boolean>(false);

// export const username = writable<string | null>(null);

export const availableDogs = writable<Dog[]>([]);

export const favoritedDogs = writable<Dog[]>([]);

export const pagination = writable<Pagination>({
	nextPage: null,
	lastPage: null,
});

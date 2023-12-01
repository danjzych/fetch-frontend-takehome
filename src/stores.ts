'use strict';

import { writable } from 'svelte/store';
import type { Dog } from './interfaces';

export const isLoggedIn = writable<Boolean>(false);

// export const username = writable<string | null>(null);

export const favoritedDogs = writable<Dog[]>([]);

'use strict';

import { writable } from 'svelte/store';
import type { Dog } from './interfaces';

export const isLoggedIn = writable<boolean>(false);

export const availableDogs = writable<Dog[]>([]);

export const favoritedDogs = writable<Dog[]>([]);

export const matchedDog = writable<Dog | undefined>(undefined);

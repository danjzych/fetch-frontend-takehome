import { writable } from 'svelte/store';

export const isLoggedIn = writable<Boolean>(false);

export const username = writable<string | null>(null);

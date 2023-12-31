'use strict';

import { get } from 'svelte/store';
import { favoritedDogs } from '../../stores';
import type { Dog } from '../../interfaces';
import AdopterAPI from '../../api';

export default async function favorite(dog: Dog) {
	const favorites = get(favoritedDogs);

	if (favorites.length >= 100) {
		window.alert('Cannot favorite more than 100 dogs');
		return;
	}

	if (!favorites.includes(dog)) {
		favoritedDogs.update((f) => [...f, dog]);
	} else {
		favoritedDogs.update((f) => f.filter((d) => d !== dog));
	}
}

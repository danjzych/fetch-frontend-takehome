'use strict';

import { get } from 'svelte/store';
import { favoritedDogs, matchedDog } from '../../stores';
import AdopterAPI from '../../api';

export default async function getMatch() {
	const favoritedIds = get(favoritedDogs).map((f) => f.id);
	const match = await AdopterAPI.getMatch(favoritedIds);

	matchedDog.set(get(favoritedDogs).find((f) => f.id === match.match));
}

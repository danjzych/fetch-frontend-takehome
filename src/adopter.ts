'use strict';

import { get } from 'svelte/store';
import {
	favoritedDogs,
	matchedDog,
	availableDogs,
	searchPreferences,
	currentPage,
} from './stores';
import type { SearchBody, Dog } from './interfaces';
import AdopterAPI from './api';

let isLoading: boolean;

/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
export default class AdopterApp {
	isLoading = true;
	static async getDogs(): Promise<void> {
		const prefs = get(searchPreferences);
		const body: SearchBody = {
			ageMin: prefs.ageMin,
			ageMax: prefs.ageMax,
			from: get(currentPage) * 25,
			sort: prefs.ascending ? 'breed:asc' : 'breed:desc',
		};

		if (prefs.selectedBreeds.size > 0) {
			body.breeds = [...prefs.selectedBreeds];
		}

		try {
			const availableDogIDs = await AdopterAPI.searchDogs(body);
			availableDogs.set(
				await AdopterAPI.getDogs(availableDogIDs.resultIds),
			);
		} catch (err) {
			window.alert(err);
		} finally {
			isLoading = false;
		}
	}

	/** Adds or removes selected dog from favoritedDogs store */
	static favorite(dog: Dog) {
		const favorites = get(favoritedDogs);
		if (!favorites.includes(dog)) {
			favoritedDogs.update((f) => [...f, dog]);
		} else {
			favoritedDogs.update((f) => f.filter((d) => d !== dog));
		}
	}

	// /** Get match based on favorited dogs in favoritedDogs store*/
	static async getMatch() {
		const favoritedIds = get(favoritedDogs).map((f) => f.id);
		const match = await AdopterAPI.getMatch(favoritedIds);

		matchedDog.set(get(favoritedDogs).find((f) => f.id === match.match));
	}
}

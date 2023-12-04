'use strict';

import { get } from 'svelte/store';
import {
	isLoading,
	searchPreferences,
	availableDogs,
	currentPage,
} from '../../stores';
import type { SearchBody } from '../../interfaces';
import AdopterAPI from '../../api';

/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
export default async function getDogs(): Promise<void> {
	isLoading.set(true);
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
		availableDogs.set(await AdopterAPI.getDogs(availableDogIDs.resultIds));
	} catch (err) {
		window.alert(err);
	} finally {
		isLoading.set(false);
	}
}

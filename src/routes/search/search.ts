'use strict';

import { SearchBody } from '../../interfaces';
import { searchPreferences } from '../../stores';

/** Searches for dogs based on search preferences (if any), set those dogs as well as next page in state */
async function getDogs(): Promise<void> {
	const body: SearchBody = {
		ageMin: searchPreferences.ageMin,
		ageMax: searchPreferences.ageMax,
		from: currentPage * 25,
		sort: searchPreferences.ascending ? 'breed:asc' : 'breed:desc',
	};

	if ($searchPreferences.selectedBreeds.size > 0) {
		body.breeds = [...$searchPreferences.selectedBreeds];
	}

	try {
		const availableDogIDs = await AdopterAPI.searchDogs(body);
		$availableDogs = await AdopterAPI.getDogs(availableDogIDs.resultIds);
	} catch (err) {
		window.alert(err);
	}
}

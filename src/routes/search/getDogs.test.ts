'use strict';

import { describe, it, expect, vi, afterEach } from 'vitest';
import { get } from 'svelte/store';
import fetchMock from 'fetch-mock';
import {
	favoritedDogs,
	matchedDog,
	availableDogs,
	searchPreferences,
	currentPage,
} from '../../stores';
import getDogs from './getDogs';

describe('getDogs', () => {
	it('calls API with empty search body', async () => {
		fetchMock.mock('https://www.frontend-challenge.com', {
			body: {
				next: '/dogs/search?breeds%5B0%5D=Cairn&breeds%5B1%5D=Yorkshire%20Terrier&size=25&from=25',
				resultIds: [
					'73GFTIcBOvEgQ5OCx9RB',
					'83GFTIcBOvEgQ5OCx9RB',
					'9nGFTIcBOvEgQ5OCx9RB',
				],
			},
			status: 200,
		});

		await getDogs();
		console.log(get(availableDogs));
	});
});

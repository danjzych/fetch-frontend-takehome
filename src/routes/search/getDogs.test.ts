'use strict';

import { describe, it, expect, vi, afterEach } from 'vitest';
import { get } from 'svelte/store';
import fetchMock from 'fetch-mock';
import { availableDogs } from '../../stores';
import getDogs from './getDogs';

//usure of how to mock API calls with http-only auth cookie
describe('getDogs', () => {
	it('calls API with empty search body', async () => {
		// fetchMock.mock(
		// 	'https://frontend-take-home-service.fetch.com/dogs/search',
		// 	{
		// 		body: {
		// 			next: '/dogs/search?size=25&from=25',
		// 			resultIds: [
		// 				'73GFTIcBOvEgQ5OCx9RB',
		// 				'83GFTIcBOvEgQ5OCx9RB',
		// 				'9nGFTIcBOvEgQ5OCx9RB',
		// 			],
		// 		},
		// 		status: 200,
		// 	},
		// );
		// await getDogs();
	});
});

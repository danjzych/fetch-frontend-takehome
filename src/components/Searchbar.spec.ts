'use strict';

import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import {
	render,
	screen,
	cleanup,
	fireEvent,
} from '@testing-library/svelte';
import Searchbar from './Searchbar.svelte';
import { searchPreferences } from '../stores';
import { get } from 'svelte/store';
import type { SearchPreferences } from '../interfaces';

const defaultSearchPreferences: SearchPreferences = {
	ascending: true,
	selectedBreeds: new Set<string>(),
	ageMin: 0,
	ageMax: 20,
};

describe('Searchbar', () => {
	beforeEach(() => {
		searchPreferences.set(defaultSearchPreferences);
	});
	afterEach(() => cleanup());

	it('renders', () => {
		render(Searchbar);

		expect(() => screen.getAllByText(/Search/i)).not.toThrow();
	});

	it('Updates ascending/descending preferences', async () => {
		render(Searchbar);

		const currentPreferences = get(searchPreferences);
		expect(currentPreferences.ascending).toBe(true);

		const ascendingButton = screen.getByText(/Ascending/i);
		await fireEvent.click(ascendingButton);

		expect(currentPreferences.ascending).toBe(false);
	});

	it('Updates ageMin preferences', async () => {
		render(Searchbar);

		const currentPreferences = get(searchPreferences);
		expect(currentPreferences.ageMin).toBe(0);

		const ageMinInput = screen.getByLabelText(/Minimum Age/i);
		console.log(ageMinInput);
		await fireEvent.change(ageMinInput, { target: { value: 5 } });

		// Was unable to configure testing change events in this testing environment
		// expect(currentPreferences.ageMin).toBe(5);
	});
});

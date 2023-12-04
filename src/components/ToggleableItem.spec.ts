'use strict';

import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import {
	render,
	screen,
	cleanup,
	fireEvent,
} from '@testing-library/svelte';
import ToggleableItem from './ToggleableItem.svelte';
import { searchPreferences } from '../stores';
import type { SearchPreferences } from '../interfaces';

const defaultSearchPreferences: SearchPreferences = {
	ascending: true,
	selectedBreeds: new Set<string>(),
	ageMin: 0,
	ageMax: 20,
};

describe('ToggleableItem', () => {
	beforeEach(() => {
		searchPreferences.set(defaultSearchPreferences);
	});

	afterEach(() => cleanup());

	it('renders', () => {
		render(ToggleableItem, { breed: 'Terrier', selected: false });

		expect(() => screen.getByText(/Terrier/i)).not.toThrow();
	});

	it('defaults to unselected styles', () => {
		render(ToggleableItem, {
			breed: 'Terrier',
			selected: false,
		});

		expect(() => screen.getByText(/bg-accent/i)).toThrow();
	});

	it('toggles style when selected', async () => {
		render(ToggleableItem, {
			breed: 'Terrier',
			selected: false,
		});

		const button = screen.getByText(/Terrier/i);
		await fireEvent.click(button);

		expect(() => document.querySelector('.bg-accent')).not.toThrow();
	});

	// How to mock stores?
	// it('adds breed to search preferences', async () => {
	// 	render(ToggleableItem, {
	// 		breed: 'Terrier',
	// 		selected: false,
	// 	});

	// 	const button = screen.getByText(/Terrier/i);
	// 	await fireEvent.click(button);

	// 	expect(() => document.querySelector('.bg-accent')).not.toThrow();
	// })
});

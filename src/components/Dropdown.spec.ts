'use strict';

import {
	describe,
	it,
	expect,
	afterEach,
	beforeAll,
	afterAll,
} from 'vitest';
import {
	render,
	screen,
	cleanup,
	fireEvent,
} from '@testing-library/svelte';
import { allBreeds } from '../stores';
import Dropdown from './Dropdown.svelte';

describe('Dropdown', () => {
	beforeAll(() => {
		allBreeds.set(['breed 1', 'breed 2', 'breed 3']);
	});

	afterEach(() => cleanup());

	afterAll(() => {
		allBreeds.set([]);
	});

	it('renders', () => {
		render(Dropdown);

		expect(() => {
			screen.getByText(/Filter by/i);
		}).not.toThrow();
	});

	it('hides dropdown by default', () => {
		render(Dropdown);

		expect(() => {
			screen.getByText(/breed 1/i);
		}).toThrow();
	});

	it('shows dropdown when clicked', async () => {
		render(Dropdown);

		const filterButton = screen.getByText(/Filter by/i);

		await fireEvent.click(filterButton);

		expect(() => {
			screen.getByText(/breed 1/i);
		}).not.toThrow();
	});

	it('hides dropdown when clicked', async () => {
		render(Dropdown);

		const filterButton = screen.getByText(/Filter by/i);

		await fireEvent.click(filterButton);
		await fireEvent.click(filterButton);

		expect(() => {
			screen.getByText(/breed 1/i);
		}).toThrow();
	});
});

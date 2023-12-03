import { describe, it, expect, afterEach, beforeEach, test } from 'vitest';
import {
	render,
	screen,
	fireEvent,
	cleanup,
} from '@testing-library/svelte';
import type { Dog } from '../interfaces';
import DogCard from './DogCard.svelte';
import { favoritedDogs } from '../stores';

const testDog: Dog = {
	id: '123abc',
	img: 'https://www.test.com/abc.jpg',
	name: 'Fido',
	age: 1,
	zip_code: '53704',
	breed: 'Doodle',
};

describe('DogCard', () => {
	beforeEach(() => {
		favoritedDogs.set([]);
	});

	afterEach(() => {
		cleanup();
	});

	it('should render the component', () => {
		render(DogCard, { dog: testDog });

		expect(() => screen.getByText(/age/i)).not.toThrow();
	});

	it("loads 'favorite' button when unfavorited", () => {
		render(DogCard, { dog: testDog });

		const favoriteButton = screen.queryByText('Favorite Fido');

		expect(favoriteButton).toBeTruthy();
	});

	it("loads 'unfavorited' button when favorited", () => {
		favoritedDogs.update((f) => [...f, testDog]);

		render(DogCard, { dog: testDog });

		const favoriteButton = screen.queryByText('Unfavorite Fido');

		expect(favoriteButton).toBeTruthy();
	});

	it('favorite button should toggle favorited state', async () => {
		render(DogCard, { dog: testDog });

		const favoriteButton = screen.getByText(/Favorite Fido/i);

		expect(favoriteButton).toBeTruthy();

		await fireEvent.click(favoriteButton);

		console.log(favoriteButton.textContent);
	});
});

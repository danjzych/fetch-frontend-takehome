'use strict';

import { describe, it, expect, beforeEach, test } from 'vitest';
import { get } from 'svelte/store';
import { favoritedDogs } from '../../stores';
import favorite from './favorite';
import type { Dog } from '../../interfaces';

const testDog: Dog = {
	id: '123abc',
	img: 'https://www.test.com/abc.jpg',
	name: 'Fido',
	age: 1,
	zip_code: '53704',
	breed: 'Doodle',
};

describe('favorite', () => {
	beforeEach(() => {
		favoritedDogs.set([]);
	});

	it('adds dog to favorites', () => {
		expect(get(favoritedDogs).length).toBe(0);

		favorite(testDog);

		expect(get(favoritedDogs).length).toBe(1);
	});

	it('removes dog from favorites', () => {
		favorite(testDog);
		expect(get(favoritedDogs).length).toBe(1);

		favorite(testDog);
		expect(get(favoritedDogs).length).toBe(0);
	});

	it('does not allow for more than 100 favorites', () => {
		for (let i = 0; i < 100; i++) {
			let dog: Dog = { ...testDog };

			dog.id = String(i);
			favorite(dog);
		}

		expect(get(favoritedDogs).length).toBe(100);

		favorite(testDog);
		expect(get(favoritedDogs).length).toBe(100);
	});
});

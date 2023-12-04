'use strict';

import { describe, it, expect, afterEach, beforeEach, test } from 'vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import type { Dog } from '../interfaces';
import MatchCard from './DogCard.svelte';
import { matchedDog } from '../stores';

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
		matchedDog.set(undefined);
	});

	afterEach(() => cleanup());

	it('renders', () => {
		render(MatchCard, { dog: testDog });

		expect(() => screen.getAllByText(/Fido/i)).not.toThrow();
	});
});

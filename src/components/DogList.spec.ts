import { describe, it, expect, afterEach, beforeEach, test } from 'vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import type { Dog } from '../interfaces';
import DogList from './DogList.svelte';

const testDogs: Dog[] = [
	{
		id: '100',
		img: 'https://www.test.com/abc.jpg',
		name: 'Fido',
		age: 1,
		zip_code: '53704',
		breed: 'Doodle',
	},
	{
		id: '101',
		img: 'https://www.test.com/abc.jpg',
		name: 'Miso',
		age: 10,
		zip_code: '53703',
		breed: 'Terrier',
	},
];

describe('DogCard', () => {
	afterEach(() => {
		cleanup();
	});

	it('renders', () => {
		render(DogList, { dogs: testDogs });

		expect(() => screen.getAllByText(/age/i)).not.toThrow();
	});

	it('renders DogCard for each dog passed as props', () => {
		render(DogList, { dogs: testDogs });

		expect(() => screen.getByText(/Favorite Fido/i)).not.toThrow();
		expect(() => screen.getByText(/Favorite Miso/i)).not.toThrow();
	});
});

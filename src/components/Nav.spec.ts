import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/svelte';
import Nav from './Nav.svelte';
import { isLoggedIn } from '../stores';

describe('Nav', () => {
	beforeEach(() => {
		isLoggedIn.set(false);
	});

	afterEach(() => {
		cleanup();
	});

	it('should render the component', () => {
		const { debug } = render(Nav);

		expect(() => screen.getByText(/Adopter/i)).not.toThrow();
	});

	it('does not show dropdown when logged out', () => {
		render(Nav);

		expect(() => screen.getByText(/Search Dogs/i)).toThrow();
	});

	it('shows dropdown when logged in', () => {
		isLoggedIn.set(true);

		render(Nav);

		expect(() => screen.getByText(/Search Dogs/i)).not.toThrow();
	});
});

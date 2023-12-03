'use strict';

import { describe, it, expect } from 'vitest';
import { formatQueryString } from './utils';

describe('formatQueryString', () => {
	it('formats an object body with strings correctly', () => {
		const body = {
			a: 'test',
			b: 'test',
		};
		expect(formatQueryString(body)).toBe('a=test&b=test');
	});

	it('formats an object body with numbers correctly', () => {
		const body = {
			a: 10,
			b: 20.5,
		};
		expect(formatQueryString(body)).toBe('a=10&b=20.5');
	});

	it('formats an object body with an array correctly', () => {
		const body = {
			a: [1, 2, 3],
		};
		expect(formatQueryString(body)).toBe('a=1&a=2&a=3');
	});

	it('formats an object body with multiple data types correctly', () => {
		const body = {
			a: [1, 2, 3],
			b: 'test',
			c: 10,
		};
		expect(formatQueryString(body)).toBe('a=1&a=2&a=3&b=test&c=10');
	});

	it('handles an empty body', () => {
		const body = {};
		expect(formatQueryString(body)).toBe('');
	});
});

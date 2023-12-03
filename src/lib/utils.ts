'use strict';

import { goto } from '$app/navigation';

/** Helper function to check if user is logged in and redirect if needed */
export function checkRedirect(loggedIn: boolean) {
	if (!loggedIn) {
		goto('/', { replaceState: true });
	}
}

/**
 * Takes an object representing data to be converted to query string and returns
 * stringified version of urlSearchParams of that data.
 * @param query
 * @returns urlParams
 */
export function formatQueryString(
	query: Record<string, string | number | string[]>,
): string {
	const newParams = new URLSearchParams();

	for (const param in query) {
		//If param is an array, need to break into format "param=x&param=y..."
		if (Array.isArray(query[param])) {
			for (const p of query[param] as []) {
				newParams.append(param, p);
			}
		} else {
			newParams.append(param, String(query[param]));
		}
	}

	return newParams.toString();
}

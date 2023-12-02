'use strict';

import { goto } from '$app/navigation';

/** Helper function to check if user is logged in and redirect if needed */
export function checkRedirect(loggedIn: boolean) {
	if (!loggedIn) {
		goto('/', { replaceState: true });
	}
}

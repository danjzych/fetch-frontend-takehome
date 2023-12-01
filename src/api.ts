'use strict';

import type { Login, Search, Dog } from './interfaces';

const BASE_URL = 'https://frontend-take-home-service.fetch.com';

/**
 * Class and methods for interacting with Fetch Frontend Engineering takehome
 * API, referred to as "AdopterAPI" throughout.
 */
class AdopterAPI {
	/** Generic method for making API requests and catching/throwing errors */
	// static async request(endpoint: string, data = {}, method = "GET") {
	//   const url = new URL(`${BASE_URL}/${endpoint}`);
	//   const headers = {
	//     "content-type": "application/json",
	//   };

	//   url.search = method === "GET" ? new URLSearchParams(data).toString() : "";

	//   const body = method !== "GET" ? JSON.stringify(data) : undefined;

	//   const resp = await fetch(url, { method, body, headers });

	//   if (!resp.ok) {
	//     console.error("API Error:", resp.statusText, resp.status);
	//     const { error } = await resp.json();
	//     throw Array.isArray(error) ? error : [error];
	//   }

	//   return await resp.json();
	// }

	/** Generic method for making API requests and catching/throwing errors */
	static async request(endpoint: string, data = {}, method = 'GET') {
		const url = new URL(`${BASE_URL}/${endpoint}`);
		const headers = {
			'content-type': 'application/json',
		};

		url.search = method === 'GET' ? new URLSearchParams(data).toString() : '';

		const body = method !== 'GET' ? JSON.stringify(data) : undefined;

		const resp = await fetch(url, { method, body, headers, credentials: 'include' });

		if (!resp.ok) {
			console.error('API Error:', resp.statusText, resp.status);
			const error = await resp.text();
			console.log(error);
			throw new Error(error);
		}

		return await resp;
	}

	/** Login to Adopter */
	static async login(body: Login) {
		// const response = await fetch(`${BASE_URL}/auth/login`, {
		//   method: "POST",
		//   body: JSON.stringify(body),
		//   credentials: "include",
		//   headers: {
		//     "content-type": "application/json"
		//   }
		// })
		await this.request('auth/login', body, 'POST');
	}

	/** Logout of Adopter */
	static async logout() {
		await fetch(`${BASE_URL}/auth/logout`, {
			method: 'POST',
			credentials: 'include',
		});

		await this.request('auth/logout', {}, 'POST');
	}

	/** Get all possible breed */
	static async getBreeds() {
		const response = await fetch(`${BASE_URL}/dogs/breeds`, {
			method: 'GET',
			credentials: 'include',
		});

		return response.json();
	}

	/** Get all dogs that meet search params */
	static async searchDogs(body: Search) {
		const response = await this.request('dogs/search', body);

		return response.json();
	}

	/** Get dogs from Adopter, based on dog IDs */
	static async getDogs(body: string[]): Promise<Dog[]> {
		const response = this.request('dogs', body, 'POST');

		return (await response).json();
	}

	/** Get matched dog for adoption */
	static async getMatch() {}

	/** Get location objects for zip codes */
	static async getLocations() {}

	/**  */
	static async searchLocations() {}
}

export default AdopterAPI;

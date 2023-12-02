'use strict';

// Interfaces for entities in Adopter API //

interface Dog {
	id: string;
	img: string;
	name: string;
	age: number;
	zip_code: string;
	breed: string;
}

interface Match {
	match: string;
}

interface Location {
	zip_code: string;
	latitude: number;
	longitude: number;
	city: string;
	state: string;
	county: string;
}

interface Coordinates {
	lat: number;
	lon: number;
}

// Interfaces for interacting with Adopter API //

interface Login {
	name: string;
	email: string;
}

interface SearchPreferences {
	ascending: boolean;
	selectedBreeds: Set<string>;
	ageMin: number;
	ageMax: number;
}

interface SearchBody {
	breeds?: string[];
	zipcode?: number[];
	ageMin?: number;
	ageMax?: number;
	size?: number;
	from?: number;
	sort?: string;
}

interface SearchResp {
	next: string;
	prev?: string;
	resultIds: string[];
	total: number;
}

export type {
	Dog,
	Match,
	Location,
	Coordinates,
	Login,
	SearchPreferences,
	SearchBody,
	SearchResp,
};

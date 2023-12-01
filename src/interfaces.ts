"use strict";

// Interfaces for entities in Adopter API //

interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}

interface Location {
  zip_code: string
  latitude: number
  longitude: number
  city: string
  state: string
  county: string
}

interface Coordinates {
  lat: number;
  lon: number;
}

// Interfaces for response bodies in Adopter API //

interface Login {
  name: string;
  email: string;
}

interface Search {
  ascending: boolean,
  selectedBreeds: string[],
  ageMin: number,
  ageMax: number
}

export type {
  Dog,
  Location,
  Coordinates,
  Login,
  Search
}
"use strict";

const BASE_URL = "https://frontend-take-home-service.fetch.com";

/**
 * Class and methods for interacting with Fetch Frontend Engineering takehome
 * API, referred to as "AdopterAPI" throughout.
 */
class AdopterAPI {

  static token = "";

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


  static async login(body): Promise<number>{
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "content-type": "application/json"
      }
    })

    return response.status;
  }

  static async logout() {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    return response;
  }

  static async getBreeds() {
    const response = await fetch(`${BASE_URL}/dogs/breeds`, {
      method: "GET",
      credentials: 'include'
    })

    return response.json();
  }
}

export default AdopterAPI;
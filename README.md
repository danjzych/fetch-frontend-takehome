<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.com/danjzych/fetch-frontend-takehome">
    <h1>Adopter</h1>
  </a>

  <h3 align="center">An application to explore adoptable dogs and find your perfect match.</h3>

  <p align="center">
    <a href="http://friender.danielzych.com/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#using-adopter">Using Adopter</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation-and-setup">Installation and Setup</a></li>
        <li><a href="#test">Running Tests</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]

An application to explore adoptable dogs and find your perfect match. Users can filter dogs based on breed and age, and sort by ascending and descending.

Users can favorite dogs in their search results. Once they like all of the dogs they've selected, they can get matched with a dog to adopt.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Using Adopter

When starting Adopter, you will be met with a login screen. To login, you can use any "name" and validly-formatted email - you do not need actual credentials. Adopter is authenticated with an http-only cookie. Refreshing the page will require you to log back in and reset your session.

All features can be navigated via dropdown menu in upper right section of Navbar.

When logging in, you sill be directed to the search page. To filter by breeds, open the dropdown filter and select breeds via click. Clicking the search button will launch a new search based on current search params. It will also return the search to page 0 if the user is not already there.

The Favorite dogs page can be used to review the dogs the user has liked. The match page will let users generate, or regenerate, matches.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][Svelte]][Svelte-url]
[![Typescript][Typescript-lang]][Typescript-url]
[![Tailwind][Tailwind-css]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local version of Adopter up and running, do the following.

### Installation and Setup

1. Clone the repo
   ```sh
   git clone https://github.com/danjzych/fetch-frontend-takehome.git
   ```
2. cd into your Adopter directory and install project dependencies

   ```sh
   cd ./your-directory
   npm install
   ```

3. Launch

   ```sh
   npm run dev -- --open
   ```

### Running Tests

1. To run tests, enter the following into the command line:

   ```sh
   npm run test
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Daniel Zych - [LinkedIn](https://www.linkedin.com/in/danielzych/) - danjzych@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This project was in part built with themes and components (i.e., buttons) from:

- [Daisy UI](https://daisyui.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: static/homepage-screenshot.png
[Svelte]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Typescript-lang]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Tailwind-css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

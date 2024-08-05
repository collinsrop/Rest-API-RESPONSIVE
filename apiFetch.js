"use strict";
export async function fetchCountryData(country) {
  let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

  const response = await fetch(finalURL);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Country not found. Please check the spelling.");
    } else {
      throw new Error(`An error occurred: ${response.status}`);
    }
  }

  return response.json();
}
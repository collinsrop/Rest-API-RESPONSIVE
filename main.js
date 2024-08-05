"use strict";
import { fetchCountryData } from "./apiFetch.js";
import { updateDOM } from "./domUpdater.js";
import { handleError } from "./errorHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  let inputCountry = document.querySelector("input");
  let searchBtn = document.querySelector("button");

  searchBtn.addEventListener("click", async () => {
    let country = inputCountry.value.trim();
    if (!country) {
      alert("Please enter a country name.");
      return;
    }

    try {
      const data = await fetchCountryData(country);
      updateDOM(data);
    } catch (error) {
      handleError(error);
    }
  });
});

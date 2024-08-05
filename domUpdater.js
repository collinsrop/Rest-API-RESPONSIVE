"use strict";
export function updateDOM(data) {
  // altNames
  document.querySelector(
    "#altNames"
  ).innerHTML = `Alternative Names: ${data[0].altSpellings.join(" / ")}`;

  // capital
  document.querySelector("#capital").innerHTML = `Capital: ${data[0].capital}`;

  // timezone
  document.querySelector(
    "#timeZone"
  ).innerHTML = `Timezone: ${data[0].timezones}`;

  // continents
  document.querySelector(
    "#cont"
  ).innerHTML = `Continents: ${data[0].continents}`;

  // subregion
  document.querySelector(
    "#subregion"
  ).innerHTML = `Subregion: ${data[0].subregion}`;

  // languages
  let languages = data[0].languages;
  let languageNames = Object.values(languages).join(", ").toString();
  document.querySelector("#lan").innerHTML = `Languages: ${languageNames}`;

  // currency
  let currency = document.querySelector("#currency");
  currency.innerHTML = `Currency: ${
    data[0].currencies[Object.keys(data[0].currencies)].name
  }, Symbol: ${data[0].currencies[Object.keys(data[0].currencies)].symbol}`;

  // tld
  let tld = data[0].tld;
  document.querySelector("#tld").innerHTML = `TLD(top level domain): ${tld
    .join(", ")
    .toString()}`;

  // population
  document.querySelector(
    "#population"
  ).innerHTML = `Population: ${data[0].population}`;

  // landlocked
  document.querySelector("#landlocked").innerHTML = data[0].landlocked
    ? `${data[0].name.common} is a landlocked country`
    : `${data[0].name.common} is not a landlocked country`;

  // UN membership
  document.querySelector("#unmember").innerHTML = data[0].unMember
    ? `${data[0].name.common} is a member of the United Nations`
    : `${data[0].name.common} is not a member of the United Nations`;

  // cars
  let cars = data[0].car;
  let carSide = Object.values(cars);
  let car = document.querySelector("#cars");
  car.innerHTML = `In ${data[0].name.common}, cars are driven on the ${carSide[1]} of the road.`;

  // flag
  document.querySelector("#flag").classList.remove("hidden");
  document.querySelector("#flag").src = data[0].flags.png;

  // coat of arms
  document.querySelector("#coa").classList.remove("hidden");
  document.querySelector("#coa").src = data[0].coatOfArms.png;
}

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let inputCountry = document.querySelector("input");
  let searchBtn = document.querySelector("button");

    searchBtn.addEventListener("click", async() => {
        let country = inputCountry.value.trim();//remove whitespace ;
        if (!country) {
          alert("Please enter a country name.");
          return;
        }
        let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
try {
      let response =   await fetch(finalURL);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Country not found. Please check the spelling.");
        } else {
          throw new Error(`An error occurred: ${response.status}`);
        }
      }

      let data =   await response.json();
          //altNames
            document.querySelector("#altNames").innerHTML = `Alternative Names: ${data[0].altSpellings.join(" / ")}`;

          //capital
            document.querySelector("#capital").innerHTML = `Capital: ${data[0].capital}`;

          //timezone
            document.querySelector("#timeZone").innerHTML = `Timezone: ${data[0].timezones}`;
          //continents
            document.querySelector("#cont").innerHTML = `Continents: ${data[0].continents}`;

          //subregion
            document.querySelector("#subregion").innerHTML = `Subregion: ${data[0].subregion}`;

          //languages
            let languages = data[0].languages;
            let langaugeNames = Object.values(languages).join(", ").toString(); //powerfull
            document.querySelector("#lan").innerHTML = `Languages: ${langaugeNames}`;

          //curency
		    let currency = document.querySelector("#currency"); 
            currency.innerHTML = `Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name},
			 Symbol: ${data[0].currencies[Object.keys(data[0].currencies)].symbol}`;

          //tld
            let tld = data[0].tld;
            document.querySelector("#tld").innerHTML = `TLD(top level domain): ${tld.join(", ").toString()}`;

          //population
            document.querySelector("#population").innerHTML = `Population: ${data[0].population}`;

          //landlocked
            if (data[0].landlocked === 1) {document.querySelector("#landlocked").innerHTML = `${country} is a landlocked country`;
            } else {
            document.querySelector("#landlocked").innerHTML = `${country} is not a landlocked country`;
            }
		//un membership
		if (data[0].unMember == 1){
			document.querySelector("#unmember").innerHTML = `${country} is a member of United Nations`;
		}else{
			document.querySelector("#unmember").innerHTML = `${country} is not a member of United Nations`;
		}
        //cars
		let cars = data[0].car;
		let carSide = Object.values(cars);
        let car = document.querySelector("#cars");
		car.innerHTML = ` In ${country} cars are driven on the ${carSide[1]} of the road.`;

    //flag
        document.querySelector("#flag").classList.remove("hidden");
        document.querySelector("#f1").classList.remove("hidden");
        document.querySelector("#flag").src = data[0].flags.png;
        

		//coa
		document.querySelector("#coa").classList.remove("hidden");
    document.querySelector("#f2").classList.remove("hidden");
		document.querySelector("#coa").src = data[0].coatOfArms.png;
    console.log(data);
}
    catch(e){
     if (e.message.includes("NetworkError")) {
        alert("Network error: Please check your internet connection.");
      } else {
        alert(e.message);
      }
      console.error("Error:", e);
    }
})
});

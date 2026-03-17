import React, { use } from "react";
import Country from "./Country";

const Countries = ({ countryPromise }) => {
  const allCountryData = use(countryPromise);
  const allCountries = allCountryData.data.countries;
  return (
    <div>
      <div>
        {allCountries.map((country) => (
          <Country key={country.cca3.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;

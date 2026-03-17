import React, { use } from "react";
import Country from "./Country";

const Countries = ({ countryPromise }) => {
  const allCountryData = use(countryPromise);
  const allCountries = allCountryData.data.countries;
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allCountries.map((country) => (
          <Country key={country.cca3.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;

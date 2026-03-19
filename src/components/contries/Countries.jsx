import React, { use } from "react";
import Country from "./Country";

const Countries = ({ countryPromise, search }) => {
  const allCountryData = use(countryPromise);
  const allCountries = allCountryData.data.countries;
  const sortedCountries = [...allCountries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  const filtered = sortedCountries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  const displayCountries = filtered || sortedCountries;
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
        {displayCountries.map((country) => (
          <Country key={country.cca3.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;

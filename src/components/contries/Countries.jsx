import React, { use, useState } from "react";
import Country from "./Country";
import Navbar from "../navbar/Navbar";

const Countries = ({ countryPromise }) => {
  const [search, setSearch] = useState([]);

  const allCountryData = use(countryPromise);
  const allCountries = allCountryData.data.countries;
  const sortedCountries = [...allCountries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );
  const searchCountry = (value) => {
    const filtered = sortedCountries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase()),
    );
    setSearch(filtered);
  };
  const displayCountries = search || sortedCountries;
  return (
    <div>
      <Navbar searchCountry={searchCountry} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
        {displayCountries.map((country) => (
          <Country key={country.cca3.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;

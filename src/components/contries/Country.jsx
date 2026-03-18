import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

const Country = ({ country }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);
  const countryDescription = async (id) => {
    setOpen(!open);
    const res = await axios.get(
      `https://openapi.programming-hero.com/api/alpha/${id}`,
    );
    if (!details) {
      setDetails(res.data.countries);
    }
  };

  const getCurrency = (currencies) => {
    if (!currencies) return;
    const key = Object.keys(currencies)[0];
    const currency = currencies[key];
    return `${currency.name} (${currency.symbol})`;
  };

  const getLanguage = (languages) => {
    if (!languages) return;
    return Object.values(languages).join(", ");
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-5">
        <div className="flex justify-between items-center gap-5">
          <img
            src={country.flags.flags.png}
            alt={country.flags.flags.alt}
            width={80}
            height={80}
          />
          <h1 className="text-2xl"> {country.name.common} </h1>
        </div>
        <button
          onClick={() => countryDescription(country.ccn3.ccn3)}
          className="btn"
        >
          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {open &&
        details &&
        details.map((detail) => (
          <div key={detail.ccn3.ccn3}>
            <h1 className="text-lg pt-1">
              <span className="font-bold"> Official name:</span>{" "}
              {detail.name.official}{" "}
            </h1>
            <h2>
              {" "}
              <span className="font-bold">Capital:</span>{" "}
              {detail.capital.capital}{" "}
            </h2>
            <p>
              {" "}
              <span className="font-bold">Continents:</span>{" "}
              {detail.continents.continents}{" "}
            </p>
            <p>
              {" "}
              <span className="font-bold">Currencies:</span>{" "}
              {getCurrency(detail.currencies.currencies)}{" "}
            </p>
            <p>
              <span className="font-bold">Languages:</span>{" "}
              {getLanguage(detail.languages.languages)}{" "}
            </p>
            <p>
              <span className="font-bold">Population:</span>{" "}
              {detail.population.population}{" "}
            </p>
            <p>
              <span className="font-bold">Area:</span> {detail.area.area}{" "}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Country;

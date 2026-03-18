import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

const Country = ({ country }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);
  // console.log(details);
  const countryDescription = async (id) => {
    setOpen(!open);
    const res = await axios.get(
      `https://openapi.programming-hero.com/api/alpha/${id}`,
    );
    if (!details) {
      setDetails(res.data.countries);
    }
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
            <h1>{detail.name.common}</h1>
            <h2> Capital: {detail.capital.capital} </h2>
            <p> Continents: {detail.continents.continents} </p>
          </div>
        ))}
    </div>
  );
};

export default Country;

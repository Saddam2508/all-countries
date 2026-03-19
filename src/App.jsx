import axios from "axios";
import "./App.css";
import Countries from "./components/contries/Countries";
import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";

const countryPromise = axios.get(
  "https://openapi.programming-hero.com/api/all",
);

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-11/12 mx-auto">
      <Navbar setSearch={setSearch} />
      <Suspense
        fallback={<span className="loading loading-dots loading-xs"></span>}
      >
        <Countries countryPromise={countryPromise} search={search} />
      </Suspense>
    </div>
  );
}

export default App;

import axios from "axios";
import "./App.css";
import Countries from "./components/contries/Countries";
import { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";

const countryPromise = axios.get(
  "https://openapi.programming-hero.com/api/all",
);

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Suspense
        fallback={<span className="loading loading-dots loading-xs"></span>}
      >
        <Countries countryPromise={countryPromise} />
      </Suspense>
    </div>
  );
}

export default App;

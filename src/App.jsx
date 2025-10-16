import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

//fetching

const fetchCountries = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;

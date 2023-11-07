import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Countries = () => {
  //----------------------------Fetch simple---------------------------------------------
  // async function FetchApi() {
  //   const response = await fetch("https://restcountries.com/v3.1/all");
  //   const pays = await response.json();
  //   console.log(pays.name);
  // }
  // FetchApi()
  //---------------------------Fetch avec UseState---------------------------------------
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const data = await response.json();
          setCountry(data);
        } else {
          console.error("Problème durant le fetch de l'API");
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchCountries();
  }, []);

  //---------------------------Fetch avec Axios---------------------------------------
  return (
    <div>
      <h1>PAGE COUNTRY</h1>
      <div className="cardContainer">
        {country.map((country) => (
          <div key={country.ccn3}>
            <img src={country.flags.svg} alt={country.name.common} />
            <h2>{country.capital}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

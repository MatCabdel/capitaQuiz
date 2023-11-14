import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
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

  return (
    <div>
      <h1>PAGE COUNTRY</h1>
      <div className="cardContainer">
        {country.map((singleCountry) => (
          <Country key={singleCountry.cca2} country={singleCountry} />
        ))}
      </div>
    </div>
  );
};

export default Countries;

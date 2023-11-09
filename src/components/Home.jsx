import Country from "../components/Country";
import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useState } from "react";

const Home = () => {
  const countries = useLoaderData();
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(12);

  const handleNext = () => {
    setMinIndex(maxIndex + 1);
    setMaxIndex(maxIndex + 13);
  };
  const handlePrevious = () => {
    setMinIndex(minIndex < 1 ? setMinIndex = 0 : minIndex - 13);
    setMaxIndex(maxIndex < 13 ? setMaxIndex = 12 : maxIndex - 13);
  };

  return (
    <div className="container">
      <h1>HOMEEE</h1>
      <button onClick={handlePrevious}>Précèdent</button>
      <button onClick={handleNext}>Suivant</button>
      
      <div className="cardContainer">
        {countries.slice(minIndex, maxIndex).map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;

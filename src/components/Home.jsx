import Country from "../components/Country";
import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";

const Home = () => {
  const countries = useLoaderData();
  

  return (
    <div className="container">
      <h1>HOMEEE</h1>
      <div className="cardContainer">
        {countries.slice(0, 12).map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;

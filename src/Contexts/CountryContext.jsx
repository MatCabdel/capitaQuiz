import {createContext, useContext, useState} from 'react';

const CountryContext = createContext();

const CountryContextProvider = () => {
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
            <CountryContext.Provider value={{country, setCountry}}>
            </CountryContext.Provider>
        </div>
    );
};

export default CountryContextProvider;
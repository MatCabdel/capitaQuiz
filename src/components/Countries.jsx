import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Countries = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data));
  }, []);

  return (
    <>
      <h1>COUNTRIES</h1>
      <ul>
        {/* {data.map((country) => (
      <li key={country.name.commons}>{country.translate.fra.commons}</li>
    ))} */}
      </ul>
    </>
  );
};

export default Countries;

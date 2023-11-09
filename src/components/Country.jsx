import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <img className="country" src={country.flags.svg} alt={country.name.common} />

      <h4 className="countryTitle">{country.capital}</h4>

      <h5 className="countryTitle">{country.translations.fra.official}</h5>
    </div>
  );
};

export default Country;


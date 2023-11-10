import React from "react";

const Card = ({ country }) => {
  return (
    <li className="Card">
      <img src={country.flags.svg} alt="" />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
      </div>
    </li>
  );
};

export default Card;

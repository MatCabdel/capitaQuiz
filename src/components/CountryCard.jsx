import React from "react";

const CountryCard = ({ country }) => {
  let currenciesName = "lol";
  let currenciesSymbol = null;
  for (let currency in country.currencies) {
    for (let curr in currency) {
      console.log(curr.name);
    }
  }
  console.log(country.currencies);
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <input
            type="checkbox"
            id="card1"
            className="more"
            aria-hidden="true"
          ></input>
          <div className="content">
            <div
              className="front"
              style={{
                backgroundImage: `url(${country.flags.svg})`,
              }}
            >
              <div className="inner">
                <h2>{country.translations.fra.official}</h2>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <label htmlFor="card1" className="button" aria-hidden="true">
                  Informations
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="description">
                  <p>
                    Nom officiel : {country.name.common},
                    <br />
                    Région : {country.region}
                  </p>
                  <p>Lien Google Maps : {country.maps.googleMaps}</p>
                  <br />
                  <br />
                </div>
                <div className="location">
                  {country.capital}, {country.translations.fra.official}
                </div>
                <div className="flag">{country.flag}</div>
                <label
                  htmlFor="card1"
                  className="button return"
                  aria-hidden="true"
                >
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* More card components go here */}
      </div>
    </div>
  );
};

export default CountryCard;

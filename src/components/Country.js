import React, { Fragment } from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((result, i) => {
    let { name, area, capital, flag, population } = result;
    return (
      <div key={i} className="country-container">
        <div class="container-header">
          <h2 className="country-name">{name}</h2>
          <h4>Capital: {capital}</h4>
        </div>
        <img src={flag} alt={name} />
        <div className="container-footer">
          <span>Area: {area}</span> <span>Population: {population}</span>
        </div>
      </div>
    );
  });
  return <Fragment>{lands}</Fragment>;
};

export default Country;

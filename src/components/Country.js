import React, { Fragment } from "react";

const Country =(props)=>{
    const lands = props.results.map((obj, i)=> {
        const [name, area, capital, flag, population] = obj;
        console.log(obj);
        return (
            <div key={i} className="country-container">
                <div class="container-header">
                    <h2 className="country-name">{name}</h2>
                    <h4>Capital: {capital}</h4>
                </div>
                <img src={flag} alt={name}/>
                <div className="container-footer">
                    <span>Area: {area}</span> <span>Population: {population}</span>    
                </div>                
            </div>
        );
    });
    return (
        <Fragment>{lands}</Fragment>
    );
}

export default Country;
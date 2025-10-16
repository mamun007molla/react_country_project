import React from 'react';
import { use } from 'react';
import Country from './Country';
const Countries = ({fetchCountries}) => {
    const countries=use(fetchCountries)
    
    return (
        <div>
            <h1>In the countries : {countries.countries.length}</h1>
            <div className='countries'>
                {countries.countries.map(country=><Country key={country.ccn3.ccn3} country={country}></Country>)}
            </div>
        </div>
    );
};

export default Countries;
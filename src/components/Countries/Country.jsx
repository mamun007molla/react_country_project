import React from 'react';

const Country = ({country}) => {
    const countryName=country.name.common
    const flag=country.flags?.flags?.png
   
    return (
        <div className='country'> 
            <h2>{countryName}</h2>
            <img src={flag} alt={country.flags?.flags?.alt }/>
        </div>
    );
};

export default Country;
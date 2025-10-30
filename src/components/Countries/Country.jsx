// import React, { useState } from 'react';

// const Country = ({country, handleVisitedCountry}) => {
//     const countryName=country.name.common
    
//     const flag=country.flags?.flags?.png
//     const [isVisited,setIsVisited]=useState(false)
    

//     const handleVisited=()=>{
    
//         handleVisitedCountry(!isVisited,countryName)
//         setIsVisited(!isVisited)
        
        
//     }
//     return (
//         <div className='country' style={{backgroundColor:isVisited&&'tomato'}}> 
            
//             <img src={flag} alt={country.flags?.flags?.alt }/>
//             <h2>{countryName}</h2>
//             <p>Population: {country.population.population}</p>
//             <p>Area: {country.area.area} {country.area.area>300000?"Big Country":"Small Country"}</p>
//             <button onClick={handleVisited}>{isVisited?"Visited":"Not Visited"}</button>
          
//         </div>
//     );
// };

// export default Country;
// import React from 'react';
// import { use,useState} from 'react';
// import Country from './Country';
// //import Visited from './Visited';
// const Countries = ({fetchCountries}) => {
//     const countries=use(fetchCountries)
//   //  const[count,setCount]=useState(0)
//     // const handleVisitedCountry=(isVisited)=>{
//     //     setCount(isVisited?count+1:count-1)
//     // }
//     const [visited,setVisited]=useState([])
//     const handleVisitedCountry=(isVisited,country)=>{
//         setVisited(isVisited?[...visited,country]:[...visited.filter(count=>count!=country)])
//     }

   
//     return (
//         <div>
//             <h1>In the countries : {countries.countries.length}</h1>
//             <h2>Total Visited Country: {visited.length}</h2>
           
//             {visited.map(c=><Visited c={c} key={visited.indexOf(c)}></Visited>)}
//             <div className='countries'>
//                 {countries.countries.map(country=><Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}
                
//                 ></Country>)}
//             </div>
//         </div>
//     );
// };

// export default Countries;
import React, { useEffect, useState } from 'react';
import './Country.css'
const country = () => {
  const [countries,setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div className=''>
      <h1>All County Visited</h1>
      <h5>Avaliable Country:{countries.length}</h5>
        <div className='header'>
        {
        countries.map(country=><SingleCountryShow
           name={country.name.common} 
           flags={country.flags.png}></SingleCountryShow>)
       } 
        </div>
    </div>
  );
};

function SingleCountryShow(props){
  return(
    <div className='Country-design'>
      <h4>CountryName:{props.name}</h4>
      <img src={props.flags} alt="Flags" />
    </div>
  )
}

export default country;
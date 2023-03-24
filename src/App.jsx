import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './component/Country/country'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Country></Country>
      <Footer></Footer>
      {/* <LoadCountry></LoadCountry> */}
    </div>
  )
}
export default App




/*----------------------------------------------------------------*/
// function LoadCountry(){
//   const [countries,setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return(
//     <div className='Country-design'>
//       <h1>All County Visited</h1>
//       <h5>Avaliable Country:{countries.length}</h5>
//       {
//         countries.map(country=><SingleCountryShow name={country.name.common} flags={country.flags.png}></SingleCountryShow>)
//       }
//     </div>
//   )
// }
// function SingleCountryShow(props){
//   return(
//     <div className='Country-design'>
//       <h1>CountryName:{props.name}</h1>
//       <img src={props.flags} alt="Flags" />
//     </div>
//   )
// }
/*-------------------------------------------------------------- */

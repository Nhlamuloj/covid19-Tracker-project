import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  GlobalStats from './components/global'
import CountriesStats from './components/countriesStats';

function App() {

   const [globalStats, setglobalStats] = useState('')

   const [CountriesStats, setCountriesStats] = useState('')
  useEffect(()=>{
    let url ="https://api.covid19api.com/summary";
    fetch(url).then((response) => response.json().then((data)=>{
      console.log(data)
      setglobalStats(data.Global)

      setCountriesStats(data.Countries)

    }))
  },[])
  return (
    <div className="App">

      < GlobalStats global={globalStats}/>
      <CountriesStats/>
    </div>
  );
}

export default App;

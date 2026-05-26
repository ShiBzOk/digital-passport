import { useState, useEffect } from 'react';

function App() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/name/japan?fields=name,capital,region,maps,population,timezones,flags,currencies');
        const data = await response.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchCountry();
  }, []);

  if (loading) return <h2>Laddar...</h2>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt="Flagga" style={{ width: '200px' }} />
      <p>Huvudstad: {country.capital[0]}</p>
      <p>Region: {country.region}</p>
      <p>Befolkning: {country.population.toLocaleString()}</p>
      <p>Tidszon: {country.timezones[0]}</p>
      <p>Valuta: {Object.values(country.currencies)[0].name}</p>
      <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import CountryCard from "./components/CountryCard";
import CountryPanel from "./components/CountryPanel";

import "./styles/CountryCard.css";
import "./styles/CountryGrid.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,maps,population,timezones,flags,currencies,cca3"
        );
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  const filteredCountries = countries
    .filter((country) => {
      const trimmed = query.trim();

      if (trimmed.length > 0 && trimmed.length < 3) return true;

      const matchesQuery = country.name.common
        .toLowerCase()
        .includes(trimmed.toLowerCase());

      const matchesRegion =
        region === "all" ||
        country.region.toLowerCase() === region.toLowerCase();

      return matchesQuery && matchesRegion;
    })
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  function loadMore() {
    setVisibleCount((prev) => prev + 20);
  }

  if (loading) {
    return <h1>LADDAR...</h1>;
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Hero
          query={query}
          setQuery={setQuery}
          region={region}
          setRegion={setRegion}
        />

        <CountryPanel
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />

        <section className="countries-section">
          <h2>EXPLORE WORLD</h2>

          <div className="country-grid">
            {filteredCountries.slice(0, visibleCount).map((country) => (
              <CountryCard
                key={country.cca3}
                country={country}
                onSelect={setSelectedCountry}
              />
            ))}
          </div>

          {visibleCount < filteredCountries.length && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={loadMore}>
                LOAD MORE
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
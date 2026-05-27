import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

import "./styles/CountryCard.css";
import "./styles/CountryGrid.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  const [loading, setLoading] = useState(true);

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
        <Hero />

        <section className="countries-section">
          <h2>EXPLORE WORLD</h2>

          <div className="country-grid">
            {countries
              .slice(0, visibleCount)
              .map((country) => (
                <article
                  className="country-card"
                  key={country.cca3}
                >
                  <div className="flag-container">
                    <img
                      src={country.flags.svg}
                      alt={country.name.common}
                    />

                    <span className="country-code">
                      {country.cca3}
                    </span>
                  </div>

                  <div className="country-content">
                    <h3>{country.name.common}</h3>

                    <div className="country-meta">
                      <div>
                        <span>REGION</span>

                        <p>{country.region}</p>
                      </div>

                      <div>
                        <span>CAPITAL</span>

                        <p>
                         {country.capital?.[0] || "No Capital"}
                        </p>
                      </div>
                    </div>

                    <div className="country-extra">
                      <p>
                        Population:
                        {" "}
                        {country.population.toLocaleString()}
                      </p>

                      <p>
                        Timezone: 
                        {" "} 
                        {country.timezones?.[0] || "Unknown"}
                      </p>

                      <p>
                        Currency:
                         {" "} 
                         {country.currencies ? 
                          Object.values(country.currencies)[0]
                                ?.name : 
                          "Unknown"}
                      </p>
                    </div>

                    <div className="buttons">
                      <button>STÄMPLA</button>

                      {country.maps?.googleMaps && ( 
                        <a 
                          href={country.maps.googleMaps} 
                          target="_blank"
                           rel="noreferrer"
                        > 
                            <button>MAP</button>
                        </a> 
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {visibleCount < countries.length && (
            <div className="load-more-container">
              <button
                className="load-more-btn"
                onClick={loadMore}
              >
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


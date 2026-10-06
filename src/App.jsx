import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import CountryCard from "./components/CountryCard";
import CountryPanel from "./components/CountryPanel";
import EmptyState from "./components/EmptyState";

import { getStampedCountries, getWishlistCountries, saveStampedCountries, saveWishlistCountries } from "./utils/storage";

import "./styles/CountryCard.css";
import "./styles/CountryGrid.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [view, setView] = useState("explore");
  const [stamped, setStamped] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://api.restcountries.com/countries/v5?limit=100", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        const data = await response.json();
        setCountries(data.data?.objects || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchCountries();
    setStamped(getStampedCountries());
    setWishlist(getWishlistCountries());
  }, []);

  const handleToggleStamp = (alpha3) => {
    let list = [...stamped];
    if (list.includes(alpha3)) {
      list = list.filter((id) => id !== alpha3);
    } else {
      list.push(alpha3);
      if (wishlist.includes(alpha3)) {
        handleToggleWishlist(alpha3);
      }
    }
    setStamped(list);
    saveStampedCountries(list);
  };

  const handleToggleWishlist = (alpha3) => {
    let list = [...wishlist];
    if (list.includes(alpha3)) {
      list = list.filter((id) => id !== alpha3);
    } else {
      list.push(alpha3);
    }
    setWishlist(list);
    saveWishlistCountries(list);
  };

  const filteredCountries = countries
    .filter((country) => {
      const trimmed = query.trim();

      const matchesView = view === "explore" ||
        (view === "passport" && stamped.includes(country.codes?.alpha_3)) ||
        (view === "bucketlist" && wishlist.includes(country.codes?.alpha_3));

      const matchesRegion = region === "all" ||
        country.region?.toLowerCase() === region.toLowerCase();

      const matchesQuery = trimmed.length < 3 ||
        country.names?.common?.toLowerCase().includes(trimmed.toLowerCase());

      return matchesView && matchesRegion && matchesQuery;
    })
    .sort((a, b) => a.names?.common?.localeCompare(b.names?.common));

  function handleResetDirectory() {
    setQuery("");
    setRegion("all");
    setView("explore");
  }

  if (loading) {
    return <h1>LADDAR...</h1>;
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Hero
          query={query} setQuery={setQuery}
          region={region} setRegion={setRegion}
          view={view} setView={setView}
        />

        <CountryPanel
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />

        <section className="countries-section">
          <h2>
            {view === "explore" && "EXPLORE WORLD"}
            {view === "passport" && `PASSPORT LOG (${filteredCountries.length})`}
            {view === "bucketlist" && `BUCKET LIST (${filteredCountries.length})`}
          </h2>

          {filteredCountries.length === 0 ? (
            <EmptyState onReset={handleResetDirectory} />
          ) : (
            <div className="country-grid">
              {filteredCountries.slice(0, visibleCount).map((country) => (
                <CountryCard
                  key={country.codes?.alpha_3}
                  country={country}
                  onSelect={setSelectedCountry}
                  isStamped={stamped.includes(country.codes?.alpha_3)}
                  isWishlisted={wishlist.includes(country.codes?.alpha_3)}
                  onToggleStamp={handleToggleStamp}
                  onToggleWishlist={handleToggleWishlist}
                />
              ))}
            </div>
          )}

          {visibleCount < filteredCountries.length && filteredCountries.length > 0 && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={() => setVisibleCount(visibleCount + 20)}>
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
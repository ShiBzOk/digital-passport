import { useState, useEffect } from "react";
 
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import CountryCard from "./components/CountryCard";
import CountryPanel from "./components/CountryPanel";
import EmptyState from "./components/EmptyState";
 
import { getStampedCountries, getWishlistCountries, saveStampedCountries, saveWishlistCountries } from "./utils/Storage";
 
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
    setStamped(getStampedCountries());
    setWishlist(getWishlistCountries());
  }, []);
 
  const handleToggleStamp = (cca3) => {
    let list = [...stamped];
    if (list.includes(cca3)) {
      list = list.filter((id) => id !== cca3);
    } else {
      list.push(cca3);
      if (wishlist.includes(cca3)) {
        handleToggleWishlist(cca3);
      }
    }
    setStamped(list);
    saveStampedCountries(list);
  };
 
  const handleToggleWishlist = (cca3) => {
    let list = [...wishlist];
    if (list.includes(cca3)) {
      list = list.filter((id) => id !== cca3);
    } else {
      list.push(cca3);
    }
    setWishlist(list);
    saveWishlistCountries(list);
  };
 
  const filteredCountries = countries
    .filter((country) => {
      const trimmed = query.trim();
      if (trimmed.length > 0 && trimmed.length < 3) return true;
 
      const matchesQuery = country.name.common
      .toLowerCase()
      .includes(trimmed.toLowerCase());


      const matchesRegion = region === "all" || 
      country.region.toLowerCase() === region.toLowerCase();
 
      if (view === "passport" && !stamped.includes(country.cca3)) return false;
      if (view === "bucketlist" && !wishlist.includes(country.cca3)) return false;
 
      return matchesQuery && matchesRegion;
    })
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
 
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
                  key={country.cca3}
                  country={country}
                  onSelect={setSelectedCountry}
                  isStamped={stamped.includes(country.cca3)}
                  isWishlisted={wishlist.includes(country.cca3)}
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
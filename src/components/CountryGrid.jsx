import CountryCard from "./CountryCard";
import "../styles/countryGrid.css";

function CountryGrid() {
  return (
    <section className="countries-section">
      <h2>EXPLORE WORLD</h2>

      <div className="country-grid">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </section>
  );
}

export default CountryGrid;
import "../styles/CountryCard.css";

function CountryCard({ country, onSelect }) {
  return (
    <article className="country-card" onClick={() => onSelect(country)}>
      <div className="flag-container">
        <img src={country.flags.svg} alt={country.name.common} />
        <span className="country-code">{country.cca3}</span>
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
            <p>{country.capital?.[0] || "No Capital"}</p>
          </div>
        </div>

        <div className="buttons">
          <button onClick={(e) => e.stopPropagation()}>STÄMPLA</button>
          <button onClick={(e) => e.stopPropagation()}>☆</button>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
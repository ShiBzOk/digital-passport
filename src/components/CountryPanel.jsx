import "../styles/CountryPanel.css";

function CountryPanel({ country, onClose }) {
  if (!country) return null;

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <button className="panel-close" onClick={onClose}>✕</button>

        <span className="subtitle-top">CURRENT DATA EXTRACT</span>
        
        <div className="title-wrapper">
          <h2>{country.name.common}</h2>
          <span className="country-code-badge">{country.cca3}</span>
        </div>

        <div className="flag-box">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>

        <div className="panel-info">
          <div>
            <span>REGION</span>
            <p className="heavy">{country.region}</p>
          </div>
          <div>
            <span>CAPITAL</span>
            <p className="italic-heavy">{country.capital?.[0] || "No Capital"}</p>
          </div>
          <div>
            <span>POPULATION</span>
            <p className="heavy">{country.population.toLocaleString()}</p>
          </div>
          <div>
            <span>TIMEZONE</span>
            <p className="heavy">{country.timezones?.[0] || "Unknown"}</p>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <span>CURRENCY</span>
            <p className="heavy">
              {country.currencies
                ? `${Object.values(country.currencies)[0]?.name} (${Object.values(country.currencies)[0]?.symbol})`
                : "Unknown"}
            </p>
          </div>
        </div>

        {country.maps?.googleMaps && (
          <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
            <button className="panel-map-btn">
              <span>ÖPPNA KARTA</span>
              <span>→</span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default CountryPanel;
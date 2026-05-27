import "../styles/CountryPanel.css";

function CountryPanel({ country, onClose }) {
  if (!country) return null;

  return (
    <div className="panel-overlay" onClick={onClose}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <button className="panel-close" onClick={onClose}>✕</button>

        <img src={country.flags.svg} alt={country.name.common} />

        <h2>{country.name.common}</h2>

        <div className="panel-info">
          <div>
            <span>REGION</span>
            <p>{country.region}</p>
          </div>
          <div>
            <span>CAPITAL</span>
            <p>{country.capital?.[0] || "No Capital"}</p>
          </div>
          <div>
            <span>POPULATION</span>
            <p>{country.population.toLocaleString()}</p>
          </div>
          <div>
            <span>TIMEZONE</span>
            <p>{country.timezones?.[0] || "Unknown"}</p>
          </div>
          <div>
            <span>CURRENCY</span>
            <p>
              {country.currencies
                ? `${Object.values(country.currencies)[0]?.name} (${Object.values(country.currencies)[0]?.symbol})`
                : "Unknown"}
            </p>
          </div>
        </div>

        {country.maps?.googleMaps && (
          <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
            <button className="panel-map-btn">ÖPPNA KARTA</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default CountryPanel;
import "../styles/CountryCard.css";

function CountryCard({ 
  country, 
  onSelect, 
  isStamped, 
  isWishlisted, 
  onToggleStamp, 
  onToggleWishlist 
}) {
  return (
    <article className="country-card" onClick={() => onSelect(country)}>
      <div className="flag-container">
        <img src={country.flag?.url_svg} alt={country.names?.common} />
        <span className="country-code">{country.codes?.alpha_3}</span>
      </div>

      <div className="country-content">
        <h3>{country.names?.common}</h3>

        <div className="country-meta">
          <div>
            <span>REGION</span>
            <p>{country.region}</p>
          </div>
          <div>
            <span>CAPITAL</span>
            <p>{country.capitals?.[0]?.name || "No Capital"}</p>
          </div>
        </div>

        <div className="buttons">
          <button 
            className={isStamped ? "stamped-active" : ""}
            onClick={(e) => {
              e.stopPropagation();
              onToggleStamp(country.codes?.alpha_3);
            }}
          >
            {isStamped ? "STÄMPLAD" : "STÄMPLA"}
          </button>
          
          <button 
            className={isWishlisted ? "star-active" : ""}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(country.codes?.alpha_3);
            }}
          >
            {isWishlisted ? "★" : "☆"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
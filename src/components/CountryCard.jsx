import "../styles/countryCard.css";

function CountryCard() {
  return (
    <article className="country-card">
      <div className="flag-container">
        <img
          src="https://flagcdn.com/w640/jp.png"
          alt="Japan"
        />

        <span className="country-code">JPN</span>
      </div>

      <div className="country-content">
        <h3>JAPAN</h3>

        <div className="country-meta">
          <div>
            <span>REGION</span>
            <p>ASIA</p>
          </div>

          <div>
            <span>CAPITAL</span>
            <p>TOKYO</p>
          </div>
        </div>

        <div className="buttons">
          <button>STÄMPLA</button>
          <button>☆</button>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
import "../styles/Hero.css";

function Hero({ query, setQuery, region, setRegion, view, setView }) {
  const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          CAPY
          <br />
          <span>PASSPORT</span>
        </h1>

        <p>DIGITAL TRAVEL LOGBOOK / UNIVERSITY PROJECT</p>

        <div className="hero-nav">
          <p 
            onClick={() => setView("explore")} 
            style={{ fontWeight: view === "explore" ? "800" : "400", cursor: "pointer" }}
          >
            EXPLORE
          </p>
          <p 
            onClick={() => setView("passport")} 
            style={{ fontWeight: view === "passport" ? "800" : "400", cursor: "pointer" }}
          >
            PASSPORT
          </p>
          <p 
            onClick={() => setView("bucketlist")} 
            style={{ fontWeight: view === "bucketlist" ? "800" : "400", cursor: "pointer" }}
          >
            BUCKET LIST
          </p>
        </div>
      </div>

      <div className="hero-right">
        <label>SEARCH DATABASE</label>

        <input
          type="text"
          placeholder="Type country name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.trim().length > 0 && query.trim().length < 3 && (
          <p style={{ fontSize: "0.7rem", opacity: 0.5, marginTop: "0.5rem" }}>
            Skriv minst 3 bokstäver...
          </p>
        )}

        <div className="filters">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              style={{
                background: region === r ? "black" : "transparent",
                color: region === r ? "white" : "black",
              }}
            >
              {r === "all" ? "ALL_WORLD" : r.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
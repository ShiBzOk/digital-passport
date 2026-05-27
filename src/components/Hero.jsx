import "../styles/Hero.css";

function Hero() {
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
          <p>EXPLORE</p>
          <p>PASSPORT</p>
          <p>BUCKET LIST</p>
        </div>
      </div>

      <div className="hero-right">
        <label>SEARCH DATABASE</label>

        <input type="text" placeholder="Type country name..." />

        <div className="filters">
          <button>WORLD</button>

          <button>AFRICA</button>

          <button>ASIA</button>

          <button>EUROPE</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;


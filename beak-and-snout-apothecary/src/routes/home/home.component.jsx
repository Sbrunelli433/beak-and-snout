import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-banner">
        <div className="container">
          <div className="hero-wrapping">
            <div className="hero-heading">
              <h1>
                Handcrafted soaps to leave your skin feeling fresh and clean.
              </h1>
            </div>
            <p>
              Our artisanal, cold-process soaps are made the old-fashioned way
              to give you a luxurious feeling product at affordable prices.
              Relax and enjoy the soothing fragrances in each bar as the natural
              oils gently cleanse your skin.
            </p>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="container">
          <div className="products-top-wrapper">
            <div>Our Products</div>
            <h2>Bar Soap</h2>
          </div>
          <div className="products-wrapper">
            <div className="product-column">
              <div className="product-square">
                <div className="product-square-text">Original Tallow Soap</div>
              </div>
              <p>
                Handmade bar soap made with beef tallow, offering a soft and
                luxurious lather.
              </p>
            </div>
            <div className="product-column">
              <div className="product-square">
                <div className="product-square-text">Seasonal Products</div>
              </div>
              <p>
                Limited-time offerings with unique scents and designs — Don't
                miss out!
              </p>
            </div>
            <div className="product-column">
              <div className="product-square">
                <div className="product-square-text">Coming Soon!</div>
              </div>
              <p>
                We're always experimenting. Check back and see what we come up
                with!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

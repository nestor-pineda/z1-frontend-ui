import "../sass/components/_hero.scss";

const Hero = () => {
  return (
    <div className="hero-img">
      <div className="hero-img__text-box">
        <h1 className="hero-img__title">Lorem ipsum dolor sit amet.</h1>
        <p className="hero-img__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="hero-btn">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;

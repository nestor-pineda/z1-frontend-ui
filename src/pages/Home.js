import Hero from "../components/Hero";
import IntroText from "../components/IntroText";
import RedCards from "../components/RedCards";
import About from "../components/About";
import Press from "../components/Press";
import "../sass/pages/home.scss";

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <IntroText />
      <RedCards />
      <About />
      <Press />
    </div>
  );
};

export default Home;

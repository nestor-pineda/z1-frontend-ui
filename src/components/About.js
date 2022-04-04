import { MdTrendingFlat } from "react-icons/md";
import "../sass/components/_about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__text-box">
        <h6 className="about__subtitle">About us</h6>
        <h1 className="about__title">Lorem ipsum dolor sit amet.</h1>
        <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <a className="about__link" href="#">
          More about us <MdTrendingFlat className="about__link-icon" />
        </a>
      </div>
      <div className="about__image"></div>
    </div>
  );
};

export default About;

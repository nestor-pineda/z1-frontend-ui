import { MdTrendingFlat } from "react-icons/md";
import "../sass/components/_press.scss";

const Press = () => {
  return (
    <>
      <div className="press-header">
        <h2 className="press-header__title">Press</h2>
        <a className="press-header__link" href="#">
          See all <MdTrendingFlat className="press-header__link-icon" />
        </a>
      </div>
      <div className="press-cards-grid">
        <div className="press-card">
          <img className="press-card__icon" src="" alt="" />
          <h6 className="press-card__title">Press Coverage</h6>
          <p className="press-card__paragraph">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="press-card__paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="press-card__date">28 Feb 2022</p>
          <a className="press-card__read-more" href="#">
            Read more
          </a>
        </div>

        <div className="press-card">
          <img className="press-card__icon" src="" alt="" />
          <h6 className="press-card__title">Press Coverage</h6>
          <p className="press-card__paragraph">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="press-card__date">28 Feb 2022</p>
          <a className="press-card__read-more" href="#">
            Read more
          </a>
        </div>

        <div className="press-card">
          <img className="press-card__icon" src="" alt="" />
          <h6 className="press-card__title">Press Coverage</h6>
          <p className="press-card__paragraph">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="press-card__date">28 Feb 2022</p>
          <a className="press-card__read-more" href="#">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Press;

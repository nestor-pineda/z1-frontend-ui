import "../sass/components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <div className="footer__logo"></div>
        </div>
        <div className="footer__info">
          <h6 className="footer__info-title">Title</h6>
          <a href="#" className="footer__info-link">
            Since
          </a>
          <a href="#" className="footer__info-link">
            Platform
          </a>
        </div>

        <div className="footer__info">
          <h6 className="footer__info-title">Title</h6>
          <a href="#" className="footer__info-link">
            About us
          </a>
          <a href="#" className="footer__info-link">
            Press
          </a>
        </div>

        <div className="footer__info">
          <h6 className="footer__info-title">Title</h6>
          <a href="#" className="footer__info-link">
            Contact us
          </a>
          <a href="#" className="footer__info-link">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copy">
          <p className="copy">©2022</p>
        </div>
        <div className="footer__tearms">
          <a href="#" className="footer__terms-link">
            Privacy Policy
          </a>
          <a href="#" className="footer__terms-link">
            Cookies
          </a>
          <a href="#" className="footer__terms-link">
            Terms and conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "../sass/components/_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <nav className="navigation">
        <a className="navigation__link" href="/html/">
          About Us
        </a>
        <a className="navigation__link" href="/css/">
          Press
        </a>
        <a className="navigation__link" href="/js/">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;

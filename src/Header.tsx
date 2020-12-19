import './Header.css';

const Header = () => (
  <div className="app__header">
    <div className="header__title">
      <h1 className="title">
        GURA
      </h1>
    </div>

    <div className="header__nav">
      <div className="header__option">
        <span className="header__element">Discover </span>
        <span className="header__dropdown">v</span>
      </div>

      <div className="header__option">
        <span className="header__element">Teach on Gura</span>
      </div>

      <div className="header__option">
        <span className="header__element">Sign up</span>
      </div>

      <div className="header__option">
        <span className="header__element">Log in</span>
      </div>
    </div>
  </div>
);

export default Header;

import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/shared/logo.svg";
import HamburgerIcon from "./../assets/shared/icon-hamburger.svg";
import CloseIcon from "./../assets/shared/icon-close.svg";

interface MainNavData {
  data: { destinations: {}; crew: {}; technology: {} };
}

const MainNav: FC<MainNavData> = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMenuHandler = () => {
    setIsMobileMenuOpen(false);
  };
  const navItems: string[] = [];
  const navItemsGenerator = () => {
    for (const item in data) {
      navItems.push(item);
    }
  };
  navItemsGenerator();
  return (
    <nav className="nav">
      <img src={Logo} aria-hidden="true" className="nav__logo" />
      <div onClick={closeMenuHandler} className={isMobileMenuOpen ? "nav__items active" : "nav__items"}>
        <NavLink className="nav__item" to="/">
          <span className="nav__index">00</span>Home
        </NavLink>
        {navItems.map((item, idx) => {
          return (
            <NavLink onClick={closeMenuHandler} className="nav__item" key={`${idx}`} to={item}>
              <span className="nav__index">{`0${idx + 1}`}</span>
              {item}
            </NavLink>
          );
        })}
        <button onClick={closeMenuHandler} type="button" className=" nav__btn nav__btn--close">
          <img src={CloseIcon} alt="" className="mobile-menu-icon" />
        </button>
      </div>

      <button onClick={toggleMenuHandler} type="button" className="nav__btn--hamburger nav__btn">
        <img src={HamburgerIcon} alt="" className="mobile-menu-icon" />
      </button>
    </nav>
  );
};

export default MainNav;

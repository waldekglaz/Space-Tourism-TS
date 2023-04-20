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
      <div onClick={closeMenuHandler} className="nav__items">
        <NavLink className="nav__item" to="/">
          Home
        </NavLink>
        {navItems.map((item, idx) => {
          return (
            <NavLink onClick={closeMenuHandler} className="nav__item" key={`${idx}`} to={item}>
              {item}
            </NavLink>
          );
        })}
      </div>

      <button onClick={toggleMenuHandler} type="button" className="mobile-menu-btn">
        <img src={isMobileMenuOpen ? CloseIcon : HamburgerIcon} alt="" className="mobile-menu-icon" />
      </button>
    </nav>
  );
};

export default MainNav;

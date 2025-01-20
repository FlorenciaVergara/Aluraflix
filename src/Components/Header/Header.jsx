import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { LinkNav, Logo, Nav, NavContainer } from "./Header.styled";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Nav>
        <Logo src={logo} alt="AluraFlix Logo" />
        <NavContainer>
          <LinkNav
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome className="icon" />
            <Button>Home</Button>
          </LinkNav>
          <LinkNav
            to="/new-video"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaPlus className="icon" />
            <Button>Nuevo Video</Button>
          </LinkNav>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Header;

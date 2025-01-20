import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active button {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }

  @media (max-width: 600px) {
    /* En pantallas pequeñas, mostrar solo iconos */
    button {
      display: none;
    }

    .icon {
      color:#f5f5f5;
      display: inline-block;
      font-size: 24px; /* Tamaño del icono */
    }
  }
`;

export const Logo = styled.img`
  width: 168px;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const Nav = styled.nav`
  box-shadow: 0px -4px 0.25rem 0rem ${({ theme }) => theme.colors.primaryHover} inset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
    gap: 20px;
  }
`;

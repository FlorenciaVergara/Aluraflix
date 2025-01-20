import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

import styled from "styled-components";

export const NotFoundContainer = styled.div`
   background-color: ${({ theme }) => theme.colors.background};
display: flex;
flex-direction: column;
gap: 0.5rem;
justify-content: center;
align-items: center;
flex: 1;
height: 100vh;

@media (max-width: 600px) {
   justify-content: flex-start;
  }

`;

export const StyledImage = styled.img`
  width: 400px;
  height: auto;
  align-items: center;

  @media (max-width: 600px) {
    width:300px;
  }
`;

export const Titulo = styled.h1`
  font-family: var(--fuenteroboto);
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.color};

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
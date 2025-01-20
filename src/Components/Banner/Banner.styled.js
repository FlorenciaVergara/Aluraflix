import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;

export const BannerImg = styled.img`
  width: 600px;
  height: 280px;
  object-fit: cover;
  border-radius: 15px;
  border: 2px solid ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]};
  box-shadow: 0px 0px 0.75rem 0.25rem ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]};
  cursor: pointer;
`;

export const BannerContent = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
`;

export const BannerVideo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const BannerTitle = styled.h1`
  font-family: var(--fuenteroboto);
  font-weight: 800;
  font-size: 1.75rem;
  background-color: ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
`;

export const BannerTituloVideo = styled.h2`
  font-family: var(--fuenteroboto);
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const BannerDescription = styled.p`
  font-family: var(--fuenteroboto);
  font-weight: 200;
  font-size: 1rem;
  margin-top: 1rem;
`;

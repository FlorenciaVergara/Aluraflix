import styled from "styled-components";

export const CategoriaContenedor = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const CategoryTitle = styled.h2`
  font-family: var(--fuenteroboto);
  font-weight: 800;
  text-align: center;
  width: 25%;
  background-color: ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 40%;
    padding: 0.75rem;
  }
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 5rem ;


`;

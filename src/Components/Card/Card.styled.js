import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]}; 
  box-shadow: 0 0.5rem 1rem ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]}; 
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 350px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: none;
  object-position: bottom;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 0.75rem 0.25rem ${({ theme, $categoria }) => theme.colors.categoryColors[$categoria]};
`;

export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #2271d1;
  }

  span {
    color: inherit;
  }
`;

export const IconText = styled.span`
  color:inherit;
  text-align: center;
  font-family: var(--fuenteroboto);
  font-weight: 800;
  cursor: pointer;
  
`;



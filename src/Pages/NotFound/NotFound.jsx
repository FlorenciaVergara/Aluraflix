import React from "react";
import  imagen  from "./404NotFound.png";
import { StyledImage,Titulo,NotFoundContainer, } from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <StyledImage
        src={imagen}
        alt="404"
      />
      <Titulo>Pagina no enontrada</Titulo>
    </NotFoundContainer>
  );
};

export default NotFound;

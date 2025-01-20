import styled from "styled-components";

export const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-family: var(--fuenteroboto);
  font-weight: 900;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.color};

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Parrafo = styled.p`
  font-family: var(--fuenteroboto);
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px 130px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
`;

export const Input = styled.input`
  padding: 10px;
  width: 470px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};

  ${(props) =>
    props.hasError &&
    `
    border: 1px solid red;
    `}

  &::placeholder {
    font-family: var(--fuentesource);
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => (props.hasError ? "red" : "#A5A5A5")};
    padding: 5px;
  }

  @media (max-width: 600px) {
    width:350px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  width: 470px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};

  ${(props) =>
    props.hasError &&
    `
    border: 1px solid red;
    `}

  &::placeholder {
    color: ${(props) => (props.hasError ? "red" : "#ccc")};
  }

  @media (max-width: 600px) {
    width:350px;
  }
`;

export const Label = styled.label`
  font-family: var(--fuentesource);
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => (props.hasError ? "red" : "#f5f5f5")};
`;

export const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-family: var(--fuentesource);
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
  width: 573px;
  height: 220px;

  ${(props) =>
    props.hasError &&
    `
    border: 1px solid red;
    `}

  &::placeholder {
    font-family: var(--fuentesource);
    font-weight: 400;
    font-size: 1rem;
    padding: 10px;
    color: ${(props) => (props.hasError ? "red" : "#A5A5A5")};
  }

  @media (max-width: 600px) {
    width:350px;
    height:200px
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: start;
  width: 100%;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 3rem;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.color};
  font-family: var(--fuentesource);
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  border: solid 2px ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    border: solid 2px ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const FormTitle = styled.h2`
  font-family: var(--fuentesource);
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.color};
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

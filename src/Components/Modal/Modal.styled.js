import styled from "styled-components";


export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 18, 47, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color:#f5f5f5;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  &:hover {
    color: #6BD1FF;
  }
`;

export const ModalHeader = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 20px 0;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
font-family:var(--fuentesource);
font-size: 1rem;
font-weight: 600;
color: #FFFFFF;
width: 70%;
`;

export const Titulo = styled.h2`
 font-family: var(--fuenteroboto);
 font-size: 2rem;
 font-weight: 900;
 color: #2271D1;
 padding: 0;
 margin: 0;
`;


export const ModalContent = styled.div`
  background: #03122F;
  padding: 1rem;
  border-radius: 15px;
  border:solid 3px  #6BD1FF;
  width: 500px;
  height: 600px;
  max-width: 90%;

  @media (max-width: 600px) {
    height: 650px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid  #2271D1;
  border-radius: 4px;
  font-family: var(--fuentesource);
  font-weight: 400;
  font-size: 1rem;
  color: #A5A5A5;
  background-color: #03122F;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid  #2271D1;
  border-radius: 4px;
  font-family: var(--fuentesource);
  font-weight: 400;
  font-size: 1rem;
  color: #A5A5A5;
  background-color: #03122F;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid  #2271D1;
  border-radius: 4px;
  font-family: var(--fuentesource);
  font-weight: 400;
  font-size: 1rem;
  color: #A5A5A5;
  background-color: #03122F;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.25rem;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    margin-top: 1.5rem;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  font-family: var(--fuentesource);
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.25rem;
  text-align: center;
  background-color: transparent;
  color: #ffffff;
  border: 0.125rem solid #f5f5f5;
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }
`;


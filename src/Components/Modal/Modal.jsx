import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseButton,
  Titulo,
  Form,
  Label,
  Input,
  Textarea,
  Select,
  Button,
} from "./Modal.styled";

const Modal = ({ videoData, onClose, onSave }) => {
  const [formData, setFormData] = useState(videoData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); 
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      imagen: "",
      src: "",
      descripcion: "",
    });
};

  return (
  
    <ModalContainer>
      <ModalContent>
      <ModalHeader>
        <CloseButton onClick={onClose}>
          <IoMdCloseCircleOutline size={30} />
        </CloseButton>
        <Titulo>Editar Video</Titulo>
      </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Label>
            Título:
            <Input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Categoría:
            <Select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="FRONT END">FRONT END</option>
              <option value="BACK END">BACK END</option>
            </Select>
          </Label>
          <Label>
            Imagen:
            <Input
              type="text"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Video:
            <Input
              type="text"
              name="src"
              value={formData.src}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Descripción:
            <Textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </Label>
          <ModalFooter>
            <Button type="submit" >Guardar</Button>
            <Button type="button" onClick={handleReset}>
              Limpiar
            </Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </ModalContainer>
    
  );
};

export default Modal;

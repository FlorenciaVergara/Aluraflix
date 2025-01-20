import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
  Main,
  TituloContainer,
  Titulo,
  Parrafo,
  ButtonContainer,
  InputContainer,
  Label,
  Select,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({
    titulo: false,
    categoria: false,
    imagen: false,
    src: false,
    descripcion: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validación: Comprobar si los campos están vacíos
    const newErrors = {
      titulo: !formData.titulo,
      categoria: !formData.categoria,
      imagen: !formData.imagen,
      src: !formData.src,
      descripcion: !formData.descripcion,
    };
  
    // Si algún campo tiene error, actualizamos el estado de errores
    setErrors(newErrors);
  
    // Solo enviamos los datos si no hay errores
    if (Object.values(newErrors).every((error) => !error)) {
      addVideo(formData);
      setFormData({
        titulo: "",
        categoria: "",
        imagen: "",
        src: "",
        descripcion: "",
      });
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      imagen: "",
      src: "",
      descripcion: "",
    });
  
    // Restablecer los errores a false para quitar el color rojo
    setErrors({
      titulo: false,
      categoria: false,
      imagen: false,
      src: false,
      descripcion: false,
    });
  };
  

  return (
    <Main>
      <TituloContainer>
        <Titulo>NUEVO VIDEO</Titulo>
        <Parrafo>
          Complete el formulario para crear una nueva tarjeta de video
        </Parrafo>
      </TituloContainer>
      <FormContainer onSubmit={handleSubmit}>
  <FormTitle>Crear Tarjeta</FormTitle>
  
  <InputContainer>
    <Label hasError={errors.titulo}>Titulo</Label>
    <Input
      type="text"
      name="titulo"
      placeholder={errors.titulo ? "Este campo es obligatorio" : "ingrese el título"}
      value={formData.titulo}
      onChange={handleChange}
      hasError={errors.titulo}
    />
  </InputContainer>

  <InputContainer>
    <Label hasError={errors.categoria}>Categoria</Label>
    <Select
      name="categoria"
      value={formData.categoria}
      onChange={handleChange}
      hasError={errors.categoria}
    >
      <option value="">Selecciona una categoría</option>
      <option value="front-end">FRONT END</option>
      <option value="back-end">BACK END</option>
    </Select>
  </InputContainer>

  <InputContainer>
    <Label hasError={errors.imagen}>Imagen</Label>
    <Input
      type="text"
      name="imagen"
      placeholder={errors.imagen ? "Este campo es obligatorio" : "ingrese el enlace de la imagen"}
      value={formData.imagen}
      onChange={handleChange}
      hasError={errors.imagen}
    />
  </InputContainer>

  <InputContainer>
    <Label hasError={errors.src}>Video</Label>
    <Input
      type="text"
      name="src"
      placeholder={errors.src ? "Este campo es obligatorio" : "ingrese el enlace del video"}
      value={formData.src}
      onChange={handleChange}
      hasError={errors.src}
    />
  </InputContainer>

  <InputContainer>
    <Label hasError={errors.descripcion}>Descripcion</Label>
    <Textarea
      name="descripcion"
      placeholder={errors.descripcion ? "Este campo es obligatorio" : "¿De qué se trata este vídeo?"}
      value={formData.descripcion}
      onChange={handleChange}
      hasError={errors.descripcion}
    />
  </InputContainer>

  <ButtonContainer>
    <Button type="submit">Guardar</Button>
    <Button type="button" onClick={handleReset}>Limpiar</Button>
  </ButtonContainer>
</FormContainer>
    </Main>
  );
};

export default NewVideo;

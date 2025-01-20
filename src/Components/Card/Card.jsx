import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
  IconText,
} from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";
import Modal from "../Modal/Modal"; 

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = async (updatedVideo) => {
    try {
      await updateVideo(video.id, updatedVideo); 
      closeModal(); 
    } catch (error) {
      console.error("Error al actualizar el video:", error);
    }
  };

  return (
    <>
      <CardContainer $categoria={video.categoria}>
        <CardImage src={video.imagen} alt={video.titulo} />
        <CardActions $categoria={video.categoria}>
          <IconButton onClick={() => deleteVideo(video.id)}>
            <FaTrashAlt />
            <IconText>Borrar</IconText>
          </IconButton>

          <IconButton onClick={openModal}>
            <FaEdit />
            <IconText>Editar</IconText>
          </IconButton>
        </CardActions>
      </CardContainer>

      
      {isModalOpen && (
        <Modal
          videoData={video}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default Card;

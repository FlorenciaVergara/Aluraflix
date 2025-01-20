import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/videos", 
});


export const getVideos = async () => {
  try {
    const response = await api.get("");  
    return response.data;
  } catch (error) {
    console.error("Error al buscar videos", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};


export const saveVideo = async (video) => {
  try {
    const response = await api.post("", video); 
    return response.data;
  } catch (error) {
    console.error("Error al guardar el video", error);
    throw error;
  }
};


export const deleteVideo = async (id) => {
  try {
    const response = await api.delete(`/${id}`);  
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el vídeo", error);
    throw error;
  }
};


export const updateVideo = async (id, updatedVideo) => {
  try {
    const response = await api.put(`/${id}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el vídeo", error);
    throw error;
  }
};

export default api;

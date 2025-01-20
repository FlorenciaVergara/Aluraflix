import { createContext, useContext, useEffect, useState } from "react";
import {
  getVideos,
  saveVideo as addVideoService,
  deleteVideo as deleteVideoService,
  updateVideo as updateVideoService,
} from "../Services/api";

const VideosContext = createContext();

export const useVideoContext = () => {
  return useContext(VideosContext);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoData = await getVideos();
        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error("Error al buscar videos", error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (newVideo) => {
    try {
      const addedVideo = await addVideoService(newVideo);
      setVideos((prevVideos) => [...prevVideos, addedVideo]);
    } catch (error) {
      console.error("Error al agregar el vídeo", error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      await deleteVideoService(id);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== id)
      );
    } catch (error) {
      console.error("Error al borrar el video", error);
    }
  };

  const updateVideo = async (id, updatedVideo) => {
    try {
      const updatedData = await updateVideoService(id, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === id ? { ...video, ...updatedData } : video
        )
      );
    } catch (error) {
      console.error("Error al actualizar el vídeo", error);
    }
  };

  const videoCategory = {};

  videos.forEach((video) => {
    const categoria = video.categoria;
    if (!videoCategory[categoria]) {
      videoCategory[categoria] = [];
    }
    videoCategory[categoria].push(video);
  });

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        videoCategory,
        addVideo,
        deleteVideo,
        updateVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

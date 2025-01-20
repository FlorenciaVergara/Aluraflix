import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryTitle, VideoList, CategoriaContenedor } from "./CategoryVideos.styled";

const CategoryVideos = () => {
  const { videoCategory } = useVideoContext();

  return (
    <div>
      {Object.keys(videoCategory).map((categoria) => (
        <CategoriaContenedor key={categoria}>
          <CategoryTitle $categoria={categoria}>{categoria}</CategoryTitle>
          <VideoList>
            {videoCategory[categoria].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
        </CategoriaContenedor>
      ))}
    </div>
  );
};

export default CategoryVideos;

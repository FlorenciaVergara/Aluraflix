import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTituloVideo,
  BannerImg,
  BannerTitle,
  BannerVideo,
} from "./Banner.styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerBackground src={video.imagen} alt={video.titulo} />

      <BannerContent>
        <div>
          <BannerTitle $categoria={video.categoria}>
            {video.categoria}
          </BannerTitle>
          <BannerVideo>
            <BannerTituloVideo>{video.titulo}</BannerTituloVideo>
            <BannerDescription>{video.descripcion}</BannerDescription>
          </BannerVideo>
        </div>
        <BannerImg $categoria={video.categoria} src={video.imagen} alt={video.titulo} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

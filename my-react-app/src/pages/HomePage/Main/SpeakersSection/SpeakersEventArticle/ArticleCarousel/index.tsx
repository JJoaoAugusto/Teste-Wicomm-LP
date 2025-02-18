import { useRef } from "react";
import { StyledDiv } from "./style";
import { Text } from "../../../../../../styles/typography";
import IconLeftArrowBlue from "../../../../../../assets/iconImages/IconLeftArrowBlue.svg";
import IconRightArrowBlue from "../../../../../../assets/iconImages/IconRightArrowBlue.svg";
import EventImage1 from "../../../../../../assets/eventImages/EventImage1.svg";
import EventImage2 from "../../../../../../assets/eventImages/EventImage2.svg";
import EventImage3 from "../../../../../../assets/eventImages/EventImage3.svg";
import EventImage4 from "../../../../../../assets/eventImages/EventImage4.svg";
import EventImage5 from "../../../../../../assets/eventImages/EventImage5.svg";
import EventImage6 from "../../../../../../assets/eventImages/EventImage6.svg";

export const ArticleCarousel = () => {
  const carouselListRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (carouselListRef.current) {
      carouselListRef.current.scrollBy({
        left: -466, // 450px (largura da imagem) + 8px (gap)
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselListRef.current) {
      carouselListRef.current.scrollBy({
        left: 466, // 450px (largura da imagem) + 8px (gap)
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledDiv>
      <div className="article__carousel-container">
        <img
          src={IconLeftArrowBlue}
          alt="Ícone que representa uma flecha para a esquerda"
          className="speakers__event-carousel-arrow"
          onClick={scrollLeft}
        />
        <ul className="speakers__event-carousel-list" ref={carouselListRef}>
          <li className="speakers__event-carousel-item">
            <figure className="speakers__event-image-container">
              <img
                src={EventImage1}
                alt="Imagem do evento mostrando uma apresentação com o público assistindo"
              />
            </figure>
          </li>
          <li className="speakers__event-carousel-item">
            <figure className="speakers__event-image-container">
              <img
                src={EventImage2}
                alt="Imagem do evento mostrando uma apresentação com o público assistindo"
              />
            </figure>
          </li>
          <li className="speakers__event-carousel-item">
            <figure className="speakers__event-image-container">
              <img
                src={EventImage3}
                alt="Imagem do evento mostrando uma apresentação com o público assistindo"
              />
            </figure>
          </li>
          <li className="speakers__event-carousel-item">
            <figure className="speakers__event-image-container">
              <img
                src={EventImage4}
                alt="Imagem do evento mostrando uma apresentação com o público assistindo"
              />
            </figure>
          </li>
          <li className="speakers__event-carousel-item">
            <figure className="speakers__event-image-container">
              <img
                src={EventImage5}
                alt="Imagem do evento mostrando uma apresentação com o público assistindo"
              />
            </figure>
          </li>
          <li className="speakers__event-carousel-item">
            <figure className="speakers__event-image-container">
              <img
                src={EventImage6}
                alt="Imagem do evento mostrando uma apresentação com o público assistindo"
              />
            </figure>
          </li>
        </ul>
        <img
          src={IconRightArrowBlue}
          alt="Ícone que representa uma flecha para a direita"
          className="speakers__event-carousel-arrow"
          onClick={scrollRight}
        />
      </div>
      <Text size={11} weight={300}>
        Imagens do evento realizado em 2023
      </Text>
    </StyledDiv>
  );
};

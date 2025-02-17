import { StyledArticle } from "./style";
import { Span, Text, Title } from "../../../../../styles/typography";
import BannerFullDeskCongresso from "../../../../../assets/logoImages/BannerFullDeskCongresso.svg";

export const CalendarArticle = () => {
  return (
    <StyledArticle
      style={{
        backgroundImage: `url(${BannerFullDeskCongresso})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="calendar__info">
        <div className="calendar__info-box">
          <Title size={28} weight={400}>
            QUANDO?
          </Title>
          <Text size={18} weight={300}>
            O{" "}
            <Span size={18} weight={500}>
              Congresso Huntington
            </Span>{" "}
            acontece nos dias{" "}
            <Span size={18} weight={500}>
              11 e 12 de abril de 2025.
            </Span>{" "}
            No dia 10, acontece a novidade desta edição: a Business Class,
            "inovação e valor para gestores de saúde".
          </Text>
        </div>
        <div className="calendar__info-box">
          <Title size={28} weight={400}>
            ONDE?
          </Title>
          <Text size={18} weight={400}>
            No hotel Tivoli Mofarrej, especialistas de vários países trazem os
            avanços, as novidades e o futuro da reprodução assistida.
          </Text>
        </div>
        <div className="calendar__info-box">
          <button className="calendar__info-button">VEJA COMO CHEGAR</button>
        </div>
      </div>
    </StyledArticle>
  );
};

import { StyledArticle } from "./style";
import {
  Bullet,
  Text,
  Title,
  black,
  blue,
} from "../../../../../styles/typography";

export const TimerArticle = () => {
  return (
    <StyledArticle>
      <ul className="calendar__timer-list">
        <li className="calendar__timer-item">
          <Title size={40} weight={500} color={black}>
            245
          </Title>
          <Text size={20} weight={300} color={black}>
            DIAS
          </Text>
        </li>
        <Bullet height={10} width={10} background={blue}></Bullet>
        <li className="calendar__timer-item">
          <Title size={40} weight={500} color={black}>
            00
          </Title>
          <Text size={20} weight={300} color={black}>
            HORAS
          </Text>
        </li>
        <Bullet height={10} width={10} background={blue}></Bullet>
        <li className="calendar__timer-item">
          <Title size={40} weight={500} color={black}>
            25
          </Title>
          <Text size={20} weight={300} color={black}>
            MIN
          </Text>
        </li>
        <Bullet height={10} width={10} background={blue}></Bullet>
        <li className="calendar__timer-item">
          <Title size={40} weight={500} color={black}>
            05
          </Title>
          <Text size={20} weight={300} color={black}>
            SEG
          </Text>
        </li>
      </ul>
    </StyledArticle>
  );
};

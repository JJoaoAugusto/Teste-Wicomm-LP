import {
  Bullet,
  Text,
  Title,
  blue,
  white,
} from "../../../../../styles/typography";
import IconBrasil from "../../../../../assets/iconImages/IconBrasil.svg";
import { StyledArticle } from "./style";
import { Dispatch, SetStateAction, useState } from "react";
import { PlanningFridayDiv } from "./PlanningFridayDiv";
import { PlanningThursdayDiv } from "./PlaningThursdayDiv";

export const PlanningArticle = () => {
  const [thursdaySelected, setThursdaySelected]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(true);
  const [fridaySelected, setFridaySelected]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [saturdaySelected, setSaturdaySelected]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  const selectThursday = () => {
    setThursdaySelected(true);
    setFridaySelected(false);
    setSaturdaySelected(false);
  };

  const selectFriday = () => {
    setThursdaySelected(false);
    setFridaySelected(true);
    setSaturdaySelected(false);
  };

  const selectSaturday = () => {
    setThursdaySelected(false);
    setFridaySelected(false);
    setSaturdaySelected(true);
  };

  return (
    <StyledArticle>
      <div className="calendar__plan-info">
        <div className="calendar__plan-title">
          <Title size={28} weight={500} color={blue}>
            PROGRAMAÇÃO
          </Title>
        </div>
        <fieldset className="calendar__plan-fieldset">
          <label htmlFor="language" className="calendar__plan-label">
            SELECIONE O IDIOMA
          </label>
          <div className="calendar__plan-language">
            <figure>
              <img
                src={IconBrasil}
                alt="Ícone que representa a bandeira do Brasil"
              />
            </figure>
            <select
              name="language"
              id="language"
              className="calendar__plan-select"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </div>
        </fieldset>
        <div className="calendar__plan-rules">
          <Text size={16} weight={300}>
            As agendas estão distribuídas por dia, horário e ambientes.
          </Text>
          <Text size={16} weight={300}>
            **Alterações de grade referentes aos speakers e horário podem
            ocorrer sem aviso prévio.
          </Text>
        </div>
      </div>

      <div className="calendar__plan-content">
        <ul className="calendar__plan-list-days">
          <li
            className={
              thursdaySelected
                ? "calendar__plan-item-selected"
                : "calendar__plan-item"
            }
            onClick={selectThursday}
          >
            <Text size={12} weight={500}>
              BUSINESS CLASS
            </Text>
            <div className="calendar__plan-item-date">
              <Text size={22} weight={500}>
                QUI
              </Text>
              <Bullet height={5} width={5} background={white}></Bullet>
              <Text size={22} weight={500}>
                QUI 10 DE ABRIL
              </Text>
            </div>
          </li>
          <li
            className={
              fridaySelected
                ? "calendar__plan-item-selected"
                : "calendar__plan-item"
            }
            onClick={selectFriday}
          >
            <Text size={12} weight={500}>
              CONGRESSO 1 DIA
            </Text>
            <div className="calendar__plan-item-date">
              <Text size={22} weight={300}>
                SEX
              </Text>
              <Bullet height={5} width={5} background={white}></Bullet>
              <Text size={22} weight={500}>
                11 DE ABRIL
              </Text>
            </div>
          </li>
          <li
            className={
              saturdaySelected
                ? "calendar__plan-item-selected"
                : "calendar__plan-item"
            }
            onClick={selectSaturday}
          >
            <Text size={12} weight={500}>
              CONGRESSO 2 DIA
            </Text>
            <div className="calendar__plan-item-date">
              <Text size={22} weight={300}>
                SÁB
              </Text>{" "}
              <Bullet height={5} width={5} background={white}></Bullet>
              <Text size={22} weight={500}>
                12 DE ABRIL
              </Text>
            </div>
          </li>
        </ul>

        <div className="calendar__plan-rules-2">
          <Text size={16} weight={500}>
            **No dia 10 haverá uma Business Class voltada a médicos e
            profissionais de saúde que administram clínicas.
          </Text>
          <Text size={16} weight={300}>
            Nos dias 11 e 12 de abril as palestras são abertas ao público,
            escolha suas palestras e garanta seu ingresso no Congresso.
          </Text>
        </div>

        <div className="calendar__plan-about">
          {thursdaySelected ? (
            <PlanningThursdayDiv />
          ) : fridaySelected ? (
            <PlanningFridayDiv />
          ) : saturdaySelected ? (
            <p>Ainda não há conteúdo</p>
          ) : (
            <p>Selecione um dia!</p>
          )}
        </div>
      </div>
    </StyledArticle>
  );
};

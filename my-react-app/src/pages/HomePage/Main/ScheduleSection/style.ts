import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1300px;
  gap: 56px;
  padding-bottom: 64px;

  .schedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 460px;
  }

  .schedule__banner {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }

  .schedule__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 100%;
    max-width: 1200px;
    height: 100%;
    gap: 40px;
    padding: 40px 40px 40px 0px;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(11, 240, 202, 0.2)
    );
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 16px;
  }

  .schedule__info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 16px;
    width: 50%;
  }

  .schedule__info-title {
  }

  .schedule__info-text {
  }

  .schedule__info-button {
    width: 200px;
    height: 45px;

    background-color: var(--blue-congresso);
    color: var(--white);

    border: none;
    font-weight: bold;

    cursor: pointer;
  }

  .schedule__timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    padding: 32px 0px;
  }

  .schedule__timer-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 64px;
  }

  .schedule__timer-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 140px;

    background-color: var(--white);
    color: var(--black);

    border-radius: 100%;
  }

  .schedule__plan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    gap: 40px;
  }

  .schedule__plan-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .schedule__plan-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 18px;
    border-bottom: solid 5px var(--white);
  }

  .schedule__plan-title {
  }

  .schedule__plan-language {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 260px;
    height: 50px;
    gap: 8px;

    border: 2px solid var(white);
    border-radius: 100px;
  }

  .schedule__plan-label {
  }

  .schedule__plan-select {
  }

  .schedule__plan-rules {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 8px;
  }

  .schedule__plan-text {
  }

  .schedule__plan-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .schedule__plan-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 312px;
    height: 70px;

    background: linear-gradient(
      to right,
      rgba(176, 78, 225, 1),
      rgba(1, 175, 217, 1)
    );
    border-radius: 100px;
  }

  .schedule__plan-item-title {
  }

  .schedule__plan-item-date {
  }

  .schedule__plan-about {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    width: 100%;
  }

  .schedule__plan-about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    height: 24px;
  }

  .schedule__plan-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    padding: 18px 56px 56px 56px;
    gap: 22px;

    background-color: var(--blue-light);
    border-radius: 8px;
  }

  .schedule__content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;

    background: linear-gradient(
      to right,
      rgba(176, 78, 225, 1),
      rgba(1, 175, 217, 1)
    );
    border-radius: 8px;
  }

  .schedule__content-title {
  }

  .schedule__content-text {
  }

  .schedule__content-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    width: 100%;
    gap: 16px;
  }

  .schedule__card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100px;
    gap: 128px;
    padding: 56px 32px;

    background-color: var(--blue-mid);
  }

  .schedule__card-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    max-width: 120px;
    gap: 8px;
  }

  .schedule__card-date-day {
  }

  .schedule__card-date-event {
  }

  .schedule__card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    gap: 12px;
  }

  .schedule__card-content-speaker {
  }

  .schedule__card-content-role {
  }
`;

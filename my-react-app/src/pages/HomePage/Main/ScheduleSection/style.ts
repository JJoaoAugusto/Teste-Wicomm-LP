import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  .schedule {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
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
    align-items: start;

    width: 100%;
    gap: 32px;
  }

  .schedule__info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    gap: 16px;
  }

  .schedule__info-title {
  }

  .schedule__info-text {
  }

  .schedule__info-button {
  }

  .schedule__timer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
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
    gap: 32px;
  }

  .schedule__plan-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 32px;
  }

  .schedule__plan-title {
  }

  .schedule__plan-text {
  }

  .schedule__plan-language {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .schedule__plan-label {
  }

  .schedule__plan-select {
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
  }

  .schedule__plan-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    padding: 16px;
    gap: 32px;
  }

  .schedule__content-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;

    background-color: white;
  }

  .schedule__content-title-text {
  }

  .schedule__content-title-subtext {
  }

  .schedule__content-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    width: 100%;
    gap: 16px;
  }

  .schedule__content-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    gap: 128px;
  }

  .schedule__card-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 80px;
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
